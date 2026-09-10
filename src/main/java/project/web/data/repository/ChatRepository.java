package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import project.web.data.domain.Chat;
import project.web.data.dto.ChatConDTO;
import project.web.data.dto.ChatRoomDTO;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
    @Query("select new project.web.data.dto.ChatConDTO(u.uName, n.nName, c.content, c.sender) from Chat c join c.user u join c.aNative n where c.user.uId = :uId and c.aNative.nId = :nId ")
    List<ChatConDTO> getMessages(String uId, String nId);

    @Query("select new project.web.data.dto.ChatRoomDTO(c.user.uId, c.user.uName, c.content) from Chat c where c.num " +
            "= (select max (c2.num) from Chat c2 where c2.aNative.nId = c.aNative.nId and c2.user.uId = c.user.uId) and c.aNative.nId = :nId")
    List<ChatRoomDTO> getChatRoom(String nId);
}