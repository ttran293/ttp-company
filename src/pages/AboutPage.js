import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'
import showroom from "../assets/aboutpage-img/showroom.jpg";
import team from "../assets/aboutpage-img/team.jpg";
import ttp from "../assets/aboutpage-img/ttp-com-main.jpg";
import work from "../assets/aboutpage-img/work.jpg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const AboutPage = () => {
  return (
    <main>
      <Slide left>
        <PageHero title="Giới thiệu" />
      </Slide>

      <Wrapper className="page section section-center">
        <Fade bottom>
          <div>
            <img src={ttp} alt="ttp" />
          </div>
        </Fade>

        <Fade bottom>
          <article>
            <div className="title">
              <h3>Thanh Thanh Phương</h3>
            </div>
            <p>
              Công ty vật liệu xây dựng và trang tri nội thất Thanh Thanh Phương
              là một công ty chuyên cung cấp một trong số nhà phân phối số 1 Khu
              vực miền Nam chuyên phân phối và cung cấp vật liệu xây dựng &
              trang trí nội, ngoại thất, thiết bị vệ sinh cho các công trình xây
              dựng lớn và những công trình dân dụng.
            </p>
          </article>
        </Fade>

        <Fade bottom>
          <article>
            <div className="title">
              <h3>Giới thiệu</h3>
            </div>
            <p>
              Trong bối cảnh ngày càng lớn mạnh của nền xây dựng của nhiều các
              công ty lớn đầu tư tại Việt Nam thì một trong số những dịch vụ cần
              thiết nhất hiện nay đó chính là kết nối các doanh nghiệp lớn đó
              tới người tiêu dùng.
              <br></br>
              Nếu như bạn đang có nhu cầu xây nhà, sửa nhà, thiết kế lại, hoặc
              cần lời gợi ý cho ngôi nhà tương lai mà vẫn chưa tìm được công ty
              nào thích hợp thì bạn hoàn toàn có thể tìm đến với Thanh Thanh
              Phương. Chúng tôi với lý tưởng sẽ trở thành một trong số những
              công ty nổi tiếng, những công ty hàng đầu về cung cấp vật liệu xây
              dựng & trang trí nội, ngoại thất, thiết bị vệ sinh cho các công
              trình xây dựng lớn và những công trình dân dụng sẽ cho bạn những
              dịch vụ tốt nhất trên thị trường hiện nay.
            </p>
          </article>
        </Fade>

        <Fade bottom>
          <article>
            <img src={work} alt="work" />
            <div className="title">
              <h3>Phương châm làm việc</h3>
            </div>
            <p>
              Chúng tôi luôn cố gắng, cải thiện với phương châm “sẵn sàng có
              được những vật liệu chất lượng và tốt nhất”. Vậy nên, chúng tôi
              đang ngày càng nỗ lực, ngày càng hoàn thiện bản thân để có thể phù
              hợp với khách hàng. Khi sử dụng các sản phẩm của chúng tôi bạn sẽ
              được hưởng rất nhiều lợi ích như (?).
            </p>
          </article>
        </Fade>
        <Fade bottom>
          <article>
            <div className="title">
              <h3>Tầm nhìn</h3>
            </div>
            <p>
              Trong 5 năm tới, Thanh Thanh Phương sẽ trở thành thương hiệu hàng
              đầu cung cấp dịch vụ trọn gói cho các khu công nghiệp tại miền
              Nam. Trong 10 năm tới, Thanh Thanh Phương sẽ là một trong 3 công
              ty lớn nhất cả nước cung cấp các dịch vụ trọn gói cho các công ty
              khu vực có vốn đầu tư nước ngoài tại Việt Nam.
            </p>
          </article>
        </Fade>

        <Fade bottom>
          <article>
            <img src={team} alt="team" />
            <div className="title">
              <h3>Đội ngũ nhiều kinh nghiệm</h3>
            </div>
            <p>
              Ngoài ra, chúng tôi vẫn luôn hoàn thiện, cải tiến hằng ngày để phù
              hợp hơn với khách hàng. Với đội ngũ nhân viên năng động, sáng tạo
              cập nhập không hư nghỉ. Với lãnh đạo có kinh nghiệm nhiều năm
              trong lĩnh vực (?). cùng với tiêu chí hoạt động (?) chúng tôi đảm
              bảo bạn có thể có được những trải nghiệm tuyệt vời nhất khi, sử
              dụng các dịch vụ của chúng tôi.
            </p>
          </article>
        </Fade>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 70%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: contain;
    margin:2rem auto 2rem auto;
  }
  p {
    line-height: 2;
    max-width: 45em;
    text-align: left;
    margin: 2rem auto auto auto;
    color: var(--clr-black);
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
`
export default AboutPage
