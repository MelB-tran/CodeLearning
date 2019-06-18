<?php
// retrieving a model by its primary key
$thing = App\Flight::find(1);
//retrieving records
public function verifyEmailAddress(){
$foundMatch = false
try{
  // retrieve the first model matching query constraints
$userWithEmail = App\User::where('emailaddress', '=', $emailValue)->firstOrFail();
} catch (Exception $e){
  echo 'Could not find email address';
  return $foundMatch;
}
$foundMatch = true;
return $foundMatch;
}
// accessors
// inside model

class User extends Model{

  // this accessor will automatically be called by Eloquent,
  // when trying to retrieve the value of 'first_name'
  // original $value of column is passed to the accessor
  public function getFirstNameAttribute($value){
    // so some manipulation happens here
    return ucfirst($value);
  }
}

// if you want to access the value on a model instance
$user = App\User::find(1);
$firstname = $user->first_name;

// can also use accessors to return computed values!
public function getFullNameAttribute(){
  return "{$this->first_name} {$this->last_name}";
}

// Mutators
// automatically called when attribute is set to a value
//
public function setFirstNameAttribute($value){
  //
  $this->attributes['first_name'] = strtolower($value);
}
// date attributes are automatically converted to a "Carbon" instance
// which provides other functionality too!!
$user = App\User::find(1);
$user->deleted_at = now();
$user->save();

// can add own dates by editing $dates property of the Model
protected $dates = [
  'seen_at'
];

// can cast diff attributes from database to model too by
// editing $casts property of model
protected $casts = [
  'is_admin' => 'boolean'
];
?>
