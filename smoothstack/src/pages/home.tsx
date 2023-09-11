import { Container } from "react-bootstrap"
import ChatSpace from "../components/chatSpace"

const Home = () => {
  return (
    <div>
      <Container >
        <ChatSpace children={<Response />} />
      </Container>
    </div>

  )
}

export { Home }

function Response() {
  return <>
    <ul style={{
      overflow: "auto", height: "70vh", listStyle: "none"
    }}>

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAgwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAABwUGAQIEAwj/xABCEAABAwMBBQYCBQoEBwAAAAABAAIDBAURBgcSITFBEyJRYXGBFJEyobGywQgVIzNCUnKCosIXYtHxFiRDU2Nzkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC4oiICIiAiIgIuCcDK8VTeLZSHFXcaOH/2Ttb9pQe5Fi49R2OV25Febc9x5BtUwn7VkYpY5W70b2PHi05CDuiIgIiICIiAiIgIiICIsBrLVdu0jaX19xfnPdhhae9M7wH+vRBk7pdKG00b6y51UVLTs+lJK4NH+/kpfXbUrtqGsdb9nlllrHA4dW1EZDG+eM4H8x9l4rNpS+7S6xl91tLJS2nO9S22Mlu83ofIefM+Sr1sttFaqRlJbaWKlp2DDY4m7oCCWRbOdZahPbat1dNEx3Olo3HdA8OjfqPqshR7DtKQjNTJcapxOSZJw37rQqaAAuUE4l2KaNe3DYKyM/vNqTn68rGS7F3W8b+l9U3SglByN9+R/RuqtIgjjr7tJ0Rh1+oor9bGHv1FOC57R45ABHu33W9aO17YdWxAW6q3KoDLqSbDZW+PDqOPMLaC0EYPJTnXGy+kusxu2m3i03uI77JIe4yR3E8QOR8x75QUYFcqZ7Ptf1k9edL6xiNJfYTuMe8YFR4eW96cD0VLBQcoiICIiAiIg8d3uNLabbU3Cuk7OmpozJI7wA8PNSLRtqqdpep5NX6hYfzTTPLLfSOPddg+HgOvifRe3bBWVOoL9Z9CW5xD6uRs9Y5v7LMnGfQAu9gqjarfTWu201BRMDKenjbHG0eAQelrQ3gMY6ALsi4PIoBOF4rjeLba271yr6alH/mla37SptrDW95vd+dpLQLQ6qYcVdf+zD0OD0x1PsF9LPsWs4/5nUtXVXauk70rzK5jc+3ePuUG80WrtO10nZ0d7t8z/wB1lQ3P2rMhwPJT2u2NaMqYiyGgnpn44PiqH5Hs4kLVamn1ZsllZU09VJetMBwEkcn0oQfu+o4eOEFtXB5LH2G8UV+tUFztsolpp27zT1HiD4EHgsig0fadoaLVds7ejxDeaQb9LO07pcRx3CfsPQr5bJ9ZyaltktBdMsvVuPZ1TXDBeOI3vXgQfP1W+qN7R4H6H15bNbULHfCVT+wuDG8jwwT7t4+rUFkRdIZGyxNkjcHMeA5rhyIPIrugIiIC4JA5rleG+VBpLLcKkH9TTSSfJpKCX7LYzqHaHqnVE43mxymlpjng0Z6fytHzKrw4KY/k90oh0LJUHO9U1sjyT1wGt/AqnIC1XaZfn6c0ZcrhA7dqNwRQnwe44B9s59ltSmf5QTHu0CXMzusrIi/04j7SEGQ2PaZjsWkaepkZmvuLRU1Ejvpd4Za32H1krexwC8Vjkjms1BJDjs300bm48N0L3IC+FXSw1dPLT1MbZYZWlj2OGQ4HmF90KCQbLjLpXXt+0U973UmPiaPe6DgeHq1w92qvqTTETflDQiA/qbdibH8J5/8A01VlAWr7S7KL7om60e7vSiEyxeT2d4fZj3W0Lq9oexzHDLXDBHkg0rY3dnXbZ/bnyu3pqbep3nOT3Tw/pwt3Uk/J+JpqLUNsJOKS4YGemQW/2KtoCIiAsXqmN0umrvEzi59FM0epYVlF0mjbLE+Nw7r2lp9CgnewKVr9nkLW846mVp9c5/EKjqS7BpRb3ak05JkS0Ne5wafD6B+4Pmq0gLC6xsTNSaar7TIQDURERuI+i8cWn5gLNLq5zQ0lxAAHElBMdjOpy6gfpO8foLvanGJsT+b4wenmOXpgqng5GVDNr1w0ZU1Yr7deDBqSlwWSULC8PI5BzhgA+ec+q82mNsOqYKZkdxscl2Y3AE0THRvI8yGkE+wQX1YvUV9oNO2mouVylEcELfdzujQOpKl1ftmvHYn4HRlYx+PpzueQPYM/ELRaTUdJqvUjKjaXdKiKlgIMVJFTuEefA44tHLPAk+KCkbG7bWXW4XbXF2jEc9zeWUzfCPPEjy4NA/hVXWOsVfa7hb45LLUU01I1oaw07gWtA6eSyGQg5RFjdSXJlosFxuMhw2mp3ye4HD60E22EHtavV1U39XLcBun3efxCramewC3Gk0J8U4HerqmSXJ6gdwfdKpiAiIgIiII5qF3/AARtio724FlsvcfY1D+OGvJAOfcMd81Ym/RC1faPpWPVul6i3gNFUz9LSvPDdkAOOPgeR9VgdkWsJLrb32C8kxXu1jspGScHSsbwDvMjkfn1Qbxe7tRWS2zXG5ztgpYRl73H5AeJPIBR+OTU+1+pk7KSWz6VY7d/zT+I/wAx+oea9GqXz7StobdM08r22K0u3617HY7R3X6+6P5iq/Q0dNQ0kNLSQRwwQtDI42NwGgcgAg13Tez3TOnI2fA22KSdo41FQO0kJ8cnl7YW0BoAAHADoF2RBxhY+62O1XiExXS301Uw9JYwceh5hZFEEhv2zK4aaqnXzZzWzU9Qwb0lA52WyAdATz9D7FbLs32gU+rYX0lXH8HeqbIqKV3DOOBc0HjjPAjmFvBAPMKTbW9Oz2isg11psdjcKKQOrGs4CVn7xA5+B8QfJBWlK9ul1llt9DpS2gyV93naCxp5MDhjPq7HsCtvptZWuTRkeqJ5hFRmASPBPEO6sHi7PDC0XZfba3VmqazX18i3GOJjtsR/ZbxGR6DhnqS4oKfp+2Q2Wy0Vsp/1dLC2IHxwOJ9ysgg4IgIiICIiDgqabStD1k9dHqrSLnQX2l7z2R8PiAP7unmOCpi4IQRvYBX2uOmudJPUbl/qKgyVEUzd172jOMZ54O9kdCVZByWha82Z0OpZvzlbpjbLywhzauIEB5H7wBHHzHH1Ws0+vNW6HkbR69tUlXSA7rLlTEEkeJI4O98FBZEWrWDaBpe+tb8FeIBK7/ozns3j2djPtlbOx7XtDmODmnkQchB2RFjbrf7RaIy+53OlpWj/ALsoB+SDJLDarr7Tb7FWyX6eOKgfE6OXtOO+HAgtA6k+C0O87Y6OWb836Pt9Tea95wxwY5rB54xk/Ieq8tq2dX/VlxivG0auLmN4x2yI91o54ODhvXgMk9Sg0vZ1pG66xijoqioqI9JUdU+UZ7vbOPRvngcT0yeq/RtHSwUVNFTUsTYYImBjI2DAaByC4pKWCjpo6alhZDBE0NjjYMBoHQL7oCIiAiIgIiICIiAuksUc0bo5WNex3BzXDIPsu6INIvWynR93e6V9s+GmdzkpXmPj/D9H6lrn+CFLTOJtGpbrRgnOBg/YWqtIgkv+DNRL3avWd2lj6twfxeV7rXsS0lSEOqxWV5HH9NNug+zcKmIgx9oslsssHYWmhp6SPwiYBn1PVZAcERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />
      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />
      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />
      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />

      <li >
        <img style={{
          height: "30px"
        }} src="data:image/jpeg;base64,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" alt="" />
        user query
      </li>
      <br />

      <li>
        <img style={{
          height: "30px"
        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_e__xnucHeJKOjet9TShGtEbm8DcK4r74_C9OrNd&s"
          alt="" />
        model response</li>
      <hr />
    </ul>
  </>
}