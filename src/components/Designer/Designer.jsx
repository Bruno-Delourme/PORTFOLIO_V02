import './Designer.css';
import Header from '../Header/Header'; // Importation du Header

const Designer = () => {
    return (
        <div>
            <Header /> {/* Inclusion du Header */}
            <section className="Designer-section">
                <div className="Designer-content">
                    <h1>about.</h1>
                    <p><h2>I&aposm a product designer based in Paris, France. Well, I mean I live in aubervilliers. It&aposs technically suburb. But there is a Metro close to my appartement. So I&aposm in Paris.</h2></p>
                    <p><h3>Since 2015, I&aposve enjoyed turning complex problems into simple, beautiful and intuitive designs. 
                        When I&aposm not pushing pixels, you&aposll find me playing League of Legends, with my dog or trying to figure it out how to download the last movie I saw on Cinema, but I was to lazy to move cause I was playing League of Legends... and I&aposm not even good at it. Well... I&aposPlat III...
                    </h3></p>
                </div>
                <div className="Designer-gallery">
                    <img src="/path-to-image1.jpg" alt="gallery-img-1" />
                    <img src="/path-to-image2.jpg" alt="gallery-img-2" />
                    <img src="/path-to-image3.jpg" alt="gallery-img-3" />
                    <img src="/path-to-image4.jpg" alt="gallery-img-4" />
                    <img src="/path-to-image5.jpg" alt="gallery-img-5" />
                </div>
            </section>
        </div>
    );
}

export default Designer;
