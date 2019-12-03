import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ProductDesc from '../ProductDesc';
import CraneImage from '../../img/stock-image.jpg'

const Products = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="component-container">
                    <h1 className="component-heading">Naše produkty</h1>
                    <ProductDesc
                        title="Jeřáby"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta lectus sed mauris dignissim, eu bibendum massa malesuada. Donec non suscipit eros. Donec lobortis imperdiet varius. Fusce volutpat libero nec dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisis metus sed porttitor fermentum. Ut tortor quam, mollis et nisl eu, eleifend dignissim neque. Phasellus rutrum sagittis malesuada. Duis molestie arcu eget lectus sollicitudin, nec bibendum leo volutpat. Maecenas congue, mi imperdiet porta rhoncus, metus nisl blandit libero, nec finibus nulla purus in nisl. Nulla tempus dignissim tincidunt."
                        image={CraneImage}
                    />
                    <ProductDesc
                        title="Elektroinstalace"
                        description="Ut tempus, urna eget vehicula lobortis, orci justo dictum nisi, id consectetur diam nulla imperdiet sapien. Pellentesque mattis velit ante, nec tempor velit suscipit vitae. Suspendisse iaculis ex nunc, non convallis magna accumsan sed. Donec id cursus libero. Nunc varius erat ut mi ultrices, eu aliquam ligula placerat. Maecenas tortor dui, semper ut sem ut, lobortis faucibus tellus. Quisque commodo ante sit amet nibh aliquet congue. Praesent a congue ipsum. Ut pharetra consectetur gravida. Morbi in magna in sem sodales interdum id a sem. Integer pellentesque pulvinar bibendum. Maecenas maximus porta mi sed maximus. Nullam at ante nulla. Proin rutrum velit ut orci vestibulum bibendum."
                        image={CraneImage}
                    />
                    <ProductDesc
                        title="Ocelové konstrukce"
                        description="In mattis arcu et enim gravida sagittis nec et lorem. Vivamus luctus aliquam lectus ut venenatis. Morbi ultrices dolor turpis, quis maximus tortor posuere eu. Nullam mollis eros sed risus condimentum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sapien in diam posuere lobortis. Donec nec finibus est, id accumsan eros. Duis id dolor porttitor, cursus dui sed, tristique magna."
                        image={CraneImage}
                    />
                    <ProductDesc
                        title="Zámečnické práce"
                        description="In non pharetra eros, at ullamcorper magna. Pellentesque erat lectus, ullamcorper id diam sit amet, finibus bibendum libero. Cras id mi vitae leo mattis porttitor in sed mi. Praesent ac felis a dolor tincidunt aliquet eget ac augue. Nullam elementum quam id tincidunt faucibus. Nullam dictum est quis justo facilisis, vel elementum lectus maximus. Sed et ullamcorper nisi, id finibus urna. Vivamus at scelerisque enim. Sed vel arcu vel mauris sagittis scelerisque. In eget imperdiet massa, sit amet condimentum enim. Etiam auctor sem at magna lacinia bibendum id nec nisl."
                        image={CraneImage}
                    />
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Products;