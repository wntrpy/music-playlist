<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Get query parameters
$songTitle = $_GET['songTitle'] ?? '';
$artistName = $_GET['artistName'] ?? '';

if (empty($songTitle) || empty($artistName)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing song title or artist name.']);
    exit;
}

$geniusAPIKey = "xzTGrVDMHQkCz_IhC8qaYllzpaBnx5U8UpKy4hrsi-xYILOykqAzBLr-egqm8GuO";
$searchQuery = urlencode($songTitle . ' ' . $artistName);
$geniusApiUrl = "https://api.genius.com/search?q=$searchQuery";

$options = [
    "http" => [
        "header" => "Authorization: Bearer $geniusAPIKey\r\n"
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($geniusApiUrl, false, $context);

if ($response === FALSE) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch lyrics.']);
    exit;
}

$data = json_decode($response, true);

if (isset($data['response']['hits'][0])) {
    $songUrl = $data['response']['hits'][0]['result']['url'];
    
    // Fetch the actual webpage containing lyrics
    $html = file_get_contents($songUrl);
    
    if ($html === FALSE) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to fetch lyrics page.']);
        exit;
    }
    
    // Create a DOM parser
    $dom = new DOMDocument();
    @$dom->loadHTML($html);
    
    // Find the lyrics container
    $xpath = new DOMXPath($dom);
    $lyricsDiv = $xpath->query("//div[contains(@class, 'Lyrics__Container')]");
    
    if ($lyricsDiv->length > 0) {
        $lyrics = '';
        foreach ($lyricsDiv as $div) {
            $lyrics .= $dom->saveHTML($div);
        }
        echo json_encode(['status' => 'success', 'lyrics' => $lyrics]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Lyrics not found on page.', 'url' => $songUrl]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No results found.']);
}
?>