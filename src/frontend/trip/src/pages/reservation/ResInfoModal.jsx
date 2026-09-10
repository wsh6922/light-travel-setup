import { useEffect } from "react";
import "../../styles/resInfoModal.css"


const ResInfoModal = ({ act, setAct }) => {

  useEffect(() => {
    if (act) {
      document.body.style.overflow = 'hidden'; // 팝업이 활성화되면 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'auto'; // 팝업이 비활성화되면 스크롤을 허용합니다.
    }

    // 컴포넌트가 언마운트될 때 스크롤을 다시 활성화하도록 정리합니다.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [act]);

  const handleClose = () => {
    setAct(false);
  }

  return (
    <div className="resInfoModalDiv" style={act ? { display: "flex" } : { display: "none" }} onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={handleClose} style={{ border: "none", backgroundColor: "transparent", fontSize: "25px", width: "30px", height: "30px" }}>&times;</button></div>
        <div>
          <h1 className="modalName">숙소에 대해 알아두세요</h1>
          <hr style={{color:"black"}}/>
          <div className="scrollable-div">

            <h3>숙소 특별 체크인 지침 (Special check-in instructions)</h3>
            <p> 이 숙박 시설은 공항에서 교통편을 제공합니다(별도의 요금이 적용될 수 있음).<br/> 예약 확인 메일에 나와 있는 연락처 정보로 숙박 시설에 연락하여 도착 세부 사항을 알려주시기 바랍니다.<br/> 도착 시 프런트 데스크 직원이 도와드립니다.<br/> 자세한 내용은 예약 확인 메일에 나와 있는 연락처 정보로 숙박 시설에 문의해 주시기 바랍니다.<br/> 만 0 ~ 5세 어린이는 어른과 함께 침대 및 기존 침구를 사용할 경우에만 숙박이 포함됩니다.<br/> 어린이용 식사는 객실 요금에 포함되어 있지 않습니다.<br/><br/>
              This property offers transfers from the airport (surcharges may apply).<br/> Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation.<br/> Front desk staff will greet guests on arrival.<br/> For more details, please contact the property using the information on the booking confirmation.<br/> Stay is included for children ages 0-5 only when sharing a bed with an adult and using existing bedding.<br/> Meals are not included in the room rate for children
            </p>
            <br/>
            <h3>숙소 공지 (Accommodation notice)</h3>
            <p>
              추가 인원에 대한 요금이 부과될 수 있으며, 이는 숙박 시설 정책에 따라 다릅니다.<br/>
              체크인 시 부대 비용 발생에 대비해 정부에서 발급한 사진이 부착된 신분증과 신용카드, 직불카드 또는 현금으로 보증금이 필요할 수 있습니다.<br/>
              특별 요청 사항은 체크인 시 이용 상황에 따라 제공 여부가 달라질 수 있으며 추가 요금이 부과될 수 있습니다. 또한, 반드시 보장되지는 않습니다.<br/>
              이 숙박 시설에서 사용 가능한 결제 수단은 신용카드, 모바일 결제, 현금입니다.<br/>
              PayPay 등의 모바일 결제 옵션을 이용하실 수 있습니다.<br/>
              고객 정책과 문화적 기준이나 규범은 국가 및 숙박 시설에 따라 다를 수 있습니다.<br/>
              명시된 정책은 숙박 시설에서 제공했습니다.<br/><br/>
              Extra-person charges may apply and vary depending on property policy<br/>
              Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges
              Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed
              This property accepts credit cards, mobile payments, and cash
              Mobile payment options include: PayPay
              Please note that cultural norms and guest policies may differ by country and by property; the policies listed are provided by the property
              <br/><br/>
              숙박 시설에서 결제하실 요금<br/>
              도시세는 1박 객실 요금에 따라 1인 기준 1박당 JPY 100 ~ 200입니다. 1박 요금이 JPY 10,000 미만인 경우에는 본 세금이 적용되지 않으며, 추가 면제가 적용될 수 있습니다.<br/> 자세한 내용은 예약 후 받으신 예약 확인 메일에 나와 있는 정보로 해당 사무실에 문의해 주시기 바랍니다.<br/>

              이 숙박 시설에서 제공한 모든 요금 정보가 포함되어 있습니다.<br/><br/>
              You'll be asked to pay the following charges at the property:<br/>
              The city tax ranges from JPY 100-200 per person, per night based on the nightly room rate. The tax does not apply to nightly rates under JPY 10,000. Please note that further exemptions may apply. For more details, please contact the office using the information on the reservation confirmation received after booking.
              <br/><br/>
              We have included all charges provided to us by the property.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResInfoModal;