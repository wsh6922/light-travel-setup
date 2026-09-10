package project.web.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import project.web.data.domain.Chat;
import project.web.data.domain.Native;
import project.web.data.domain.User;
import project.web.data.dto.ChatConDTO;
import project.web.data.dto.ChatDTO;
import project.web.data.dto.ChatRoomDTO;
import project.web.data.service.chat.ChatService;
import project.web.data.service.nativeP.NativeService;
import project.web.data.service.user.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST})
public class ChatController {

    private final SimpMessagingTemplate messagingTemplate;
    private final ChatService chatMessageService;
    private final HttpServletRequest request;
    private final UserService userService;
    private final NativeService nativeService;

    @GetMapping("/get-message")
    public List<ChatConDTO> getMessage(String uId, String nId) {
        return chatMessageService.getMessages(uId, nId);
    }

    @MessageMapping("/message")
    public void sendMessage(ChatDTO message) {
        Native aNative = nativeService.getNative(message.getNId());
        User user = userService.getUser(message.getUId());
        Chat chat = message.chat(user, aNative);
        chatMessageService.messageSave(chat);

        message.setUserName(user.getUName());
        message.setNativeName(aNative.getNName());
        messagingTemplate.convertAndSend("/sub/message/" + message.getNId() +"/"+ message.getUId() , message);
    }

    @PostMapping("/chat-room")
    public List<ChatRoomDTO> getChatRoom() {
        HttpSession session = request.getSession();
        String nid = (String) session.getAttribute("id");

        return chatMessageService.getChatRoom(nid);
    }
}