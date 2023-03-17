import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export default function Home(props) {
  console.log("PROPS:", props);
  return <div>
    <BlockRenderer blocks={props.blocks} />
  </div>;
}

export const getStaticProps = async () =>{
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
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
    `
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      menuItems: mapMainMenuItems(data.acfOptionsMenu.Menu.menuItems),
      blocks
       }
  };
}