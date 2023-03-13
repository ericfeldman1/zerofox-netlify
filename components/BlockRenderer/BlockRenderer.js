import { Cover } from "../Cover";
import { Heading } from "components/Heading";
import { theme } from "theme";
import { Paragraph } from "components/Paragraph";
import { CallToActionButton } from "components/CallToActionButton";
import { HeroShowcase } from "components/HeroShowcase";

export const BlockRenderer = ({ blocks }) => {
    return blocks.map( (block) => {
        switch(block.name){
            case "acf/heroshowcase": {
                return (
                    <HeroShowcase 
                    key={block.id}
                    buttonLabel={block.attributes.data.button_label}
                    defaultImage={block.attributes.data.default_image}
                    hoverImage={block.attributes.data.hover_image}
                    eyebrow={block.attributes.data.eyebrow}
                    header={block.attributes.data.header}
                    link={block.attributes.data.link}
                    overlapHero={block.attributes.data.overlap_hero}

                    />
                )
            }
            case "acf/ctabutton": {
                return (
                    <CallToActionButton 
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align}

                    />
                )
            }
            case "core/paragraph": {
                return (
                <Paragraph 
                key={block.id} 
                content={block.attributes.content} 
                textAlign={block.attributes.align}  
                textColor ={theme[block.attributes.textColor] || block.attributes.style?.color?.text
                }    
                />
                )}
            case "core/heading": {
            return (
            <Heading 
            key={block.id} 
            level={block.attributes.level} 
            content={block.attributes.content}
            textAlign={block.attributes.align}  
            />
            );
            }
            case "core/cover": {
                console.log("BLOCK: ", block);
                return (
                <Cover key={block.id} background={block.attributes.url}>
                   <BlockRenderer blocks={block.innerBlocks} /> 
                </Cover>
                    );
            }   
            default:
                console.log("UNKNOWN:", block);
                return null;
        }
    })
}