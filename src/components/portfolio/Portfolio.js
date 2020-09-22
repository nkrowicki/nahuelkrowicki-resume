import React from 'react';
import Card from './Card';
import useGetTranslation from '../../hooks/useGetTranslation';




const Portfolio = () => {

    const data = useGetTranslation();

    return (
        <>
        <hr className="m-0" />

        <section
            className="resume-section p-3 p-lg-5 d-flex justify-content-center"
            id="portfolio"
            >
                <div className="w-100">
                    <h2 className="mb-5">{data.portfolio.title}</h2>
                    <div className="subheading mb-3">
                        {data.portfolio.subheading1}
                    </div>
                    <div className="d-flex flex-wrap justify-content-around">
                        {data.portfolio.works.map(work=>(
                            <Card 
                                title={work.title}
                                image='https://www.infobae.com/new-resizer/8F8qLNRgEpBxPhejzPqDO2wKgLo=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/HLIB5NDTKRH2FNBTNWXMGAVOS4.jpg'
                                description={work.description}
                                technologies={work.technologies}
                                url={work.url}
                                />
                        ))}
                    </div>
                    <div className="d-flex flex-wrap justify-content-around mt-5">
                        <a href="https://github.com/nkrowicki" target="_blank" rel="noreferrer" class="btn btn-outline-dark"><i class="fab fa-lg fa-github"></i> {data.portfolio.viewMore}</a>
                    </div>

                </div>
        </section>
        </>
    )
}

export default Portfolio
