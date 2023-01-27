import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
    ssr: false,
})
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

const images = [
    {
        src: '/gallery/img.jpg',
    },
    {
        src: '/gallery/img2.jpg',
    },
    {
        src: '/gallery/img3.jpg',
    },
]

export default function Multicity({ folderLinks }) {
  return (
    <>
      <Head>
        <title>Multicity - Anwesha 2023</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <br /><br />
        {folderLinks.map(folder => (<Gallery key={Math.random()}
          eventName={folder.name}
          desc={folder.desc}
          images={folder.links} />))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const process = require('process');
  const { google } = require('googleapis');
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN

  // Authenticate using google auth client
  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  )

  // Setting the refresh token
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

  // Setting the scope to drive
  const scopes = [
    'https://www.googleapis.com/auth/drive'
  ];

  // Creating an google drive object
  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
  });

  // folderLink will contain the object of all the required information
  let folderLinks = [];
  try {
    // Getting a list of all the folders inside the folderId of gallery folder and then sorting them in descending order of createdTime.
    // The field parameter will only extract those fields from the response.
    const folder = await drive.files.list({ q: "mimeType='application/vnd.google-apps.folder'", fields: 'files(id, name, description, createdTime)', folderId: '1M372zJ4VWAC2PdgvIGUzCOE4fwFMLm0r', orderBy: 'createdTime desc' });

    // Creating an array out of the following object
    const folderdata = Array.from(folder.data.files);

    // Poping because the last entry is gallry folder itself
    folderdata.pop()

    // Iterating over the folderdata array and getting the images inside each folder
    folderLinks = await Promise.all(folderdata.map(async folder => {

      // Creating an image array where all the images inside the folder will be stored and trashed=false ensure that once the file has been deleted it will not show
      const images = await drive.files.list({ q: `'${folder.id}' in parents and (mimeType='image/jpeg' or mimeType='image/png') and trashed=false` });

      // Now iterating over the images array and getting the link of each image
      const imageLinks = await Promise.all(images.data.files.map(async image => {

        // To create a link we will append the id of the image to the url
        let url = 'https://drive.google.com/uc?export=view&id=' + image.id;
        return url;
      }));

      // Returning the required information about the image
      return { name: folder.name, desc: folder.description, links: imageLinks };
    }))
  } catch (error) {
    throw error;
  }
  return {
    props: { folderLinks }, // will be passed to the page component as props
  }
}
