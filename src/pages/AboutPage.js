import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="Giới thiệu" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Thành lập từ 1996</h2>
            <div className="underline"></div>
          </div>
          <p>
            Công ty TNHH Thanh Thanh Phương là một trong số nhà phân phối số 1
            Khu vực miền Nam chúng tôi chuyên phân phối và cung cấp VLxd & Trang
            trí nội,ngoại thất,thiết bị vệ sinh cho các công trình xây dựng lớn
            và những công trình dân dụng.
            <br></br>
            Đến với Showroom Thanh Thanh Phương bạn sẽ không chỉ nhận được sự tư
            vấn nhiệt tình mà còn được hưởng mức giá cạnh tranh nhất.
            <br></br>
            Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm và lựa chọn mặt hàng phải
            đơn giản, dễ dàng và mang đến cảm xúc vui thích. Niềm tin này
            truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại Thanh Thanh Phương.
          </p>
        </article>
        <article>
          <div className="title">
            <h2>Thông tin</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
        <article>
          <div className="title">
            <h2>Thông tin</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
