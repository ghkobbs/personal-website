import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from "../components/layout.module.scss"

export const query = graphql`
	query($slug: String!) {
		contentfulProjectItem(slug: { eq: $slug }) {
			featuredImage {
				title
				file {
					url
				}
             }
             title
             tagline
             slug
             publishedDate
             client
             role
             desktopImages {
				title
				file {
					url
				}
             }
             mobileImages {
               title
               file {
                 url
               }
			}
			overview {
               json
			}
		}
	}
`

const Project = (props) => {
    return (
        <Layout>
			<SEO title={props.data.contentfulProjectItem.title} description={props.data.contentfulProjectItem.tagline} />            
			<div className={LayoutStyles.featuredImageSection}>
				<div class={LayoutStyles.container}>
					<div className="top-main-section">
						<div className="top-main-section-wrapper">
							<div className={LayoutStyles.topMainSectionInnerWrapper}>
								<h1 className={LayoutStyles.projectMainTitle}>{props.data.contentfulProjectItem.title}</h1>
								<p className={LayoutStyles.projectTagLine}>{props.data.contentfulProjectItem.title}</p>
							</div>
						</div>
					</div>
					<div className="featured-image-section-wrapper">
						<div className={LayoutStyles.featuredImageSectionInnerWrapper}>
							<div className={LayoutStyles.featuredImage}>
								<img src={props.data.contentfulProjectItem.featuredImage.file.url} alt={props.data.contentfulProjectItem.featuredImage.title} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={LayoutStyles.projectSummarySection}>
				<div class={LayoutStyles.container}>
					<div className={LayoutStyles.projectSummarySectionWrapper}>
						<div className={LayoutStyles.projectSummarySectionInnerWrapper}>
							<div className={[LayoutStyles.projectSummaryContent+" "+LayoutStyles.projectSummaryLeftContent]}>
								<h2 className={LayoutStyles.projectSubtitle}>Overview</h2>
								{documentToReactComponents(props.data.contentfulProjectItem.overview.json)}
							</div>
							<div className={[LayoutStyles.projectSummaryContent+" "+LayoutStyles.projectSummaryRightContent]}>
								<h2 className={LayoutStyles.projectSubtitle}>Role</h2>
								<p>Design & Development</p>	
								<h2 className={LayoutStyles.projectSubtitleAlt}>Client</h2>
								<p>vTechnology</p>	
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={LayoutStyles.projectImagesSection}>
				<div class={LayoutStyles.container}>
					<div className={LayoutStyles.projectImagesSectionWrapper}>
						<div className={LayoutStyles.projectImagesSectionInnerWrapper}>
							{ props.data.contentfulProjectItem.desktopImages.map((image) => {
								return(
									<div className={LayoutStyles.projectImageContent}>
										<div className={LayoutStyles.projectImageWrapper}>
											<img src={image.file.url} alt={image.title} />
										</div>
									</div>
								)
							})}
							{ props.data.contentfulProjectItem.mobileImages.map((image) => {
								return(
									<div className={LayoutStyles.projectImageContent}>
										<div className={LayoutStyles.projectMobileImageWrapper}>
											<img src={image.file.url} alt={image.title} />
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
        </Layout>
    )
}

export default Project