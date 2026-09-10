package project.web.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.web.data.domain.NativePagePicture;

public interface NativePagePicRepository extends JpaRepository<NativePagePicture, Long> {
}
