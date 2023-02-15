package com.example.notification.Controller;

import com.example.notification.Dto.Request.RequestMessage;
import com.example.notification.Fcm.FirebaseCloudMessageService;
import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notification")
public class NotificationController {

    private final FirebaseCloudMessageService firebaseCloudMessageService;

    public NotificationController(FirebaseCloudMessageService firebaseCloudMessageService) {
        this.firebaseCloudMessageService = firebaseCloudMessageService;
    }

    @PostMapping("/send")
    public ResponseEntity pushMessage(@RequestBody RequestMessage requestMessage)
            throws IOException {
        System.out.println(requestMessage.getTargetToken() + " "
                + requestMessage.getTitle() + " " + requestMessage.getBody());


        firebaseCloudMessageService.sendMessageTo(
                requestMessage.getTargetToken(),
                requestMessage.getTitle(),
                requestMessage.getBody());

        return ResponseEntity.ok().build();
    }

    @PostMapping("/comment")
    public ResponseEntity commentNotification(@RequestBody RequestMessage requestMessage)
            throws IOException {

        firebaseCloudMessageService.sendMessageTo(
                requestMessage.getTargetToken(),
                requestMessage.getTitle(),
                "새 댓글이 달렸어요: "+requestMessage.getBody());

        return ResponseEntity.ok().build();
    }


}
