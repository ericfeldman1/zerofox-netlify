import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";

export default function Page(props) {
    console.log("PAGE PROPS: ", props);
    return <div>
        <BlockRenderer blocks={props.blocks} />
    </div>;
    }

    export const getStaticProps = async (context) => {
        console.log("CONTEXT:", context);
        const uri = `/${context.params.slug.join("/")}/`;
        console.log("URI: ", uri)
        const {data} = await client.query({
            query: gql`
            query PageQuery($uri: String!) {
              nodeByUri(uri: $uri) {
                ... on Page {
                  id
                  title
                  blocksJSON
                }
              }
              acfOptionsMenu {
                Menu {
                  menuItems {
                    menuItem {
                      destination {
                        ... on Page {
                          uri
                        }
                      }
                      label
                    }
                    items {
                      destination {
                        ... on Page {
                          uri
                        }
                      }
                      label
                    }
                  }
                }
              }
            }
            `,
           variables: {
               uri,
           } 
          });
        
          const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
        
          return {
            props: { 
              menuItems: data.acfOptionsMenu.Menu.menuItems,
                title: data.nodeByUri.title,
                blocks, 
            }
          };
    }

    export const getStaticPaths = async () => {
        const {data} = await client.query({
            query: gql`
            query AllPagesQuery {
                pages{
                  nodes{
                    uri
                  }
                }
              }`,
        });

        return {
            paths: data.pages.nodes.map(page => ({
              // paths: [...data.pages.nodes, ...data.properties.nodes]
              //   .filter(page => page.uri !== "/" )
              //   .map((page) => ({
                params: {
                  slug: page.uri.substring(1, page.uri.length-1).split("/"),
                    // slug: page.uri.substring(1, page.uri.length-1).split("/"),
                }
            })),
            fallback: false,
        }
    }