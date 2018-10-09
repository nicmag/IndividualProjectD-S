<?php
class Comment
{
  public $id;
  public $comment;
  public function __construct($row) {
    $this->id = isset($row['id']) ? intval($row['id']) : null;
    // $this->id = intval($data['id']);
    $this->comment = $row['comment'];
  }

  public function create() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  $sql = 'INSERT Chair (comment)
          VALUES (?)';
  $statement = $db->prepare($sql);
  $success = $statement->execute([
    $this->comment
  ]);
  $this->id = $db->lastInsertId();
}

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM Chair';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment =  new Comment($row);
      array_push($arr, $theComment);
    }
    return $arr;
  }
}
