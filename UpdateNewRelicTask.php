<?php

require_once 'phing/Task.php';

class UpdateNewRelicTask extends Task {
    protected $apiKey;
    protected $appId;
    protected $url;
    protected $version;

    public function setApiKey($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function setAppId($appId) {
        $this->appId = $appId;
    }

    public function setUrl($url) {
        $this->url = $url;
    }

    public function setVersion($version) {
        $this->version = $version;
    }

    public function main() {
        $options = array(
            CURLOPT_POSTFIELDS => array(
                'deployment[application_id]' => $this->appId,
                'deployment[description]' => $this->version,
                'deployment[user]' => 'Phing task',
            ),
            CURLOPT_HTTPHEADER => array(
                'x-api-key: ' . $this->apiKey,
            ),
            CURLOPT_URL => $this->url,
        );
        $ch = curl_init();
        curl_setopt_array($ch, $options);
        curl_exec($ch);
        curl_close($ch);
    }
}
