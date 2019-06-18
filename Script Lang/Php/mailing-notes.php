<?php
// method receives $notifiable entity and returns
// a Illuminate/Notifications/messages/mailmessage
//instance
public function toMail($notifiable){
  $url = url('/invoice'.$this->invoice->id);

  return (new MailMessage)->greeting('')
            ->
}

// sendPasswordResetNotification inside User model
?>
