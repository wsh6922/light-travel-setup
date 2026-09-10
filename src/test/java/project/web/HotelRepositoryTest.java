package project.web;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;



import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class HotelRepositoryTest {

    @Autowired
    private EntityManager entityManager;

    @Test
    public void testNativeQuery() {
        // 네이티브 쿼리 작성
        String nativeQuery = "select * from hotel h, hotel_picture hp where h.h_num = hp.h_num";

        // EntityManager를 사용하여 쿼리 실행
        Query query = entityManager.createNativeQuery(nativeQuery);

        // 결과 가져오기
        List<Object[]> resultList = query.getResultList();

        List<Map<String, Object>> a = new ArrayList<>();



        // 결과 확인

        // 결과 값 출력
        for (Object[] result : resultList) {
            System.out.println(Arrays.toString(result));
        }
    }
}