//retrieving records
$foundMatch = false
try{
$userWithEmail = App\User::where('emailaddress', '=', $emailValue)->firstOrFail();
} catch (Exception $e){
  echo 'Could not find email address';
  return $foundMatch;
}
$foundMatch = true;
return $foundMatch;
