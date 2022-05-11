import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

import metalic from "../assets/room/metalic.jpg";
import metalic2 from "../assets/room/metalic2.jpg";

import organic1 from "../assets/room/organic1.jpg";
import organic2 from "../assets/room/organic2.jpg";
import organic3 from "../assets/room/organic3.jpg";

import popart from "../assets/room/popart.jpg";
import popart2 from "../assets/room/popart2.jpg";
import popart3 from "../assets/room/popart3.jpg";

import minimal from "../assets/room/minimal.jpg";
import minimal2 from "../assets/room/minimal2.jpg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const RoomPage = () => {
  return (
    <main>
      <Slide left>
        <PageHero title="Phong Cách Nội thất" />
      </Slide>

      <Wrapper className="page section section-center">
        <Fade bottom>
          <div>
            <h4>
              Làm thế nào để lựa chọn phong cách thiết kế nội thất phù hợp?
            </h4>
            <p>
              Hiện nay, có rất nhiều phong cách thiết kế nội thất khác nhau, mỗi
              phong cách lại mang tới vẻ đẹp riêng và không gian lý tưởng dành
              cho bạn. Vì thế, bạn nên lựa chọn phong cách thiết kế phù hợp với
              tính cách gia đình của bạn nhất để mang tới không gian sống gần
              gũi, mang tới cảm giác thoải mái nhất cho cả nhà.
            </p>
            <h4>Các phong cách thiết thế khác nhau</h4>
            <p>
              Cách trang trí không gian sống thể hiện một phần tính cách, sở
              thích và Guu thẩm mỹ của người. Bởi vậy, những người am hiểu về
              nội thất khi bước vào ngôi nhà của bạn, xem cách bài trí không
              gian sống có thể đoán được phần nào tính cách của gia đình. Hãy
              tìm hiểu một số phong cách thiết kế dưới đây để tìm ra phong cách
              nội thất phù hợp nhất cho tính cách của mình.
            </p>
          </div>
        </Fade>

        <Fade bottom>
          <h4>Hiện đại, trẻ trung, năng động</h4>
          <p>
            Những ai yêu thích sự trẻ trung, năng động trong không gian sống thì
            có thể lựa chọn không gian sống được thiết kế theo phong cách hiện
            đại kết hợp với những màu sắc tươi sáng. Kiểu dáng thiết kế của
            những món đồ nội thất đề cao sự thanh lịch, hoàn hảo nhất. Với những
            người có tính cách và sở thích như vậy thì phong cách thiết kế nội
            thất: metallic, organic, mordernism,… là các phong cách thiết kế có
            thể thỏa mãn được nhu cầu và mong muốn của bạn.
          </p>
          <p>
            Phong cách thiết kế nội thất Metallic: là phong cách thiết kế nội
            thất kim loại, có đặc tính là sử dụng những đường thẳng để làm nổi
            bật những bề mặt bóng, nhẵn của những món đồ nội thất.Phong cách
            thiết kế nội thất Metallic có đặc điểm: ưu tiên việc sử dụng bề mặt
            kim loại, sáng bóng. Màu sắc sử dụng thường là màu tối tự nhiên như
            màu: đen, nâu, xám.Với không gian được thiết kế theo phong cách này
            phù hợp với những người có tính cách mạnh mẽ, hướng ngoại, năng
            động.
          </p>
          <article className="onebytwo">
            <img src={metalic} className="fill" alt="room" height={800} />
            <img src={metalic2} className="fill" alt="room" height={800} />
          </article>
        </Fade>

        <article className="onebytwo">
          <p>
            Tiếp đến đó là phong cách Organic: Luôn hướng tới sự tổng hòa về màu
            sắc và chất liệu trong không gian sống, tạo đượcc cảm giác thân
            thiện với thiên nhiên, con người. Với phong cách thiết kế nội thất
            này giúp mang tới không gian sống độc đáo, phá cách hơn nhưng cũng
            giữ lại được sự gần gũi và chân phương cần thiết. Không gian sống
            được thiết kế trong phong cách này những món đồ nội thất được thiết
            kế, bài trí với hình dạng tự do, phóng khoáng với những đường cong
            mềm mại. Chúng đều được lấy cảm hứng từ thiên nhiên.
            <br></br>
            Đặc trưng của phong cách Organic trong nội thất đó là ưa chuộng
            đường cong. Những đường cong mềm mại, miên man như mê cung không có
            điểm đầu và điểm cuối. Ngoài đường cong thì những hình khối cũng
            được tận dụng triệt để trong phong cách thiết kế nội thất này. Chúng
            biến đổi một cách linh hoạt và có kết cấu vô cùng đa dạng. Chính sự
            kết hợp độc đáo này giúp mang tới điểm khác biệt của phong cách
            thiết kế này. Sử dụng màu sắc táo bạo và đa dạng cũng là một trong
            những điểm nổi bật trong phong cách Organic. Đôi khi không gian được
            lấp đầy bằng những gam màu vô cùng rực rỡ và ấn tượng nhưng cũng có
            lúc bạn chỉ thấy những màu đơn sức, dịu nhẹ tự nhiên. Sử dụng màu
            sắc như thế nào là phụ thuộc vào cá tính của người dùng. Phong cách
            thiết kế này còn ưa chuộng đồ nội thất bằng gỗ bởi nó đại diện cho
            tự nhiên. Đồ nội thất gỗ sẽ giữ màu nguyên thủy, những đường vân
            hoặc thớ gỗ xù xì để mang tới sự thân tiện, ấm cúng hơn cho không
            gian.
          </p>

          <img
            src={organic1}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
        </article>
        <article className="onebytwo">
          <img
            src={organic2}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
          <img
            src={organic3}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
        </article>

        <h4>Yêu thích nghệ thuật, tính sáng tạo và sự đột phá</h4>
        <p>
          Sở hữu không gian sinh hoạt sáng tạo với nhiều màu sắc, hình thù khác
          nhau giúp mang tới cảm hứng mới mẻ cho cuộc sống. Bạn có thể mang tới
          không gian sống lý tưởng như vậy trong căn hộ của mình bằng phong cách
          nội thất như: pop art, tropical, expressionism,… Phong cách nội thất
          Pop Art: sử dụng những màu sắc, hình khối và vật liệu đơn giản nhưng
          lại được cách điệu giúp mang tới tính thẩm mỹ và công năng sử dụng
          cao. Phong cách thiết kế Pop Art có đặc diểm rất dễ nhận biết bởi việc
          hình ảnh trang trí, gam màu được sử dụng một cách táo bạo, màu sắc rực
          rỡ, có sự tương phản mạnh mẽ. Những gam màu sử dụng trong phong cách
          thiết kế nội thất này chủ yếu là màu đỏ, vàng, xanh dương. Pop Art còn
          thể hiện tính đa chiều và thể hiện được “ tính cách” của không gian
          sống đó là sự quyễn rũ, lãng mạn, mạnh mẽ và có một chút lòe loẹt được
          thể hiện qua sự chuyển động của hình khối, ánh sáng. Với trường phái
          cổ điển ưu tiên sự sang trọng thì với phong cách thiết kế Pop Art đúng
          như cái tên của nó: Nghệ thuật và đầy màu sắc. Với không gian sống
          được thiết kế theo phong cách này bạn sẽ được tận hưởng một không gian
          sống đầy nghệ thuật.
        </p>

        <article className="onebythree">
          <img
            src={popart}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
          <img
            src={popart2}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
          <img
            src={popart3}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
        </article>

        <h4>Dành cho những người có tính cách hướng nội</h4>
        <p>
          Những người có tính cách hướng nội, sống khép mình thường có cái nhìn
          sâu sắc và yêu thích sự tối giản. Bởi vậy, sự lựa chọn phù hợp nhất
          dành cho những người có tính cách này là phong cách Bắc Âu, phong cách
          tối giản (Minimalism)…
          <br></br>
          Phong cách thiết kế nội thất tối giản (Minimalism) giảm thiểu đến tối
          đa những chi tiết trang trí trong không gian, những đường nét và kết
          cấu được ẩn dấu bên dưới, đi ngược lại với phong cách thiết kế truyền
          thống về những chi tiết phức tạp và phong phú.
          <br></br>
          Phong cách này hướng đến sự loại bỏ những chi tiết thừa, nhằm mang tới
          khoảng không gian hoàn hảo. Đặc điểm của phong cách thiết kế này là sử
          dụng những đường nét thiết kế đơn giản, kết hợp với sự tính toán của
          các mặt phẳng giúp mang tới không gian có tổng thể hài hòa, đẹp đẽ và
          thoáng đãng. Hạn chế sử dụng những chi tiết hoặc vật dụng trang trí.
          Tuy được thiết kế tối giản nhưng vẫn phải đáp ứng được yếu tố về thẩm
          mỹ, sự tiện nghi trong quá trình sử dụng. Màu sắc cũng hạn chế sử dụng
          không quá 3 màu trong 1 không gian. Tường nhà thường sử dụng tone màu
          trung tính hoặc màu trắng để chuyển chú ý của người nhìn tới tone màu
          tạo điểm nhấn. óm lại, thiết kế nội thất theo phong cách tối giản là
          sử dụng những cái gì cần thiết nhất thay thế cho những cái cần thiết.
          Phong cách thiết kế tối giản nhưng không gian sống mang lại thì không
          tối giản chút nào, rất có chiều sâu. Do đó đây là phong cách thiết kế
          nội thất phù hợp nhất dành cho những người có tính cách hướng nội.
        </p>

        <article className="onebytwo">
          <img
            src={minimal}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
          <img
            src={minimal2}
            className="cover"
            alt="work"
            height={800}
            width={200}
          />
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  max-width: 80rem;
  h4 {
    text-align: center;
  }
  .onebytwo {
    grid-template-columns: 1fr 1fr;
  }

  .onebythree {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .onebyfour {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  article {
    display: grid;

    gap: 2rem;
    margin: 2rem auto 2rem auto;
  }
  .cover {
    object-fit: cover;
  }
  .fill {
    object-fit: fill;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    max-height: 1000px;
  }
  p {
    line-height: 2;
    ${"" /* max-width: 45em; */}
    text-align: left;
    margin: 1rem auto 2rem auto;
    color: var(--clr-black);
  }
  .main-p {
    max-width: 45em;
  }
  .title {
    text-align: center;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export default RoomPage;
