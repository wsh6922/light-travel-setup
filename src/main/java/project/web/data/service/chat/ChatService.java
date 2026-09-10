package project.web.data.service.chat;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.web.data.domain.Chat;
import project.web.data.dto.ChatConDTO;
import project.web.data.dto.ChatRoomDTO;
import project.web.data.repository.ChatRepository;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatMessageRepository;
    public void messageSave(Chat message) {
        chatMessageRepository.save(message);
    }

    public List<ChatConDTO> getMessages(String uId, String nId) {
        return chatMessageRepository.getMessages(uId, nId);
    }

    public List<ChatRoomDTO> getChatRoom(String nId) {
        return chatMessageRepository.getChatRoom(nId);
    }
}