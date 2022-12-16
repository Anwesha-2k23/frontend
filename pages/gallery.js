import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery';

export default function Multicity({folderLinks}) {
    const images = [
        "https://images.unsplash.com/photo-1670387123483-f64189de053d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1670304866394-7f84b2365366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1670331524356-8a54cf7d2064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
        "https://images.unsplash.com/photo-1670330883632-819e70d45073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        "https://images.unsplash.com/photo-1670299610682-3cbe15a4bf0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        "https://images.unsplash.com/photo-1670354580465-dc138fe3dd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1670248549474-adfc766594e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1670355815666-be4988705b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1670304000102-d01e99a8dfa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1670239509764-98c3d2c2d2ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1670180399804-42701f598ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        "https://images.unsplash.com/photo-1670239510546-5a59f3039d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1670238115034-cf9936ae00ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1670000806702-8f447448f50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://plus.unsplash.com/premium_photo-1661431285542-d93ddee1de87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1670214765086-780147ba00ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80"
    ]
    return (
        <>
            <Head>
                <title>Multicity - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <br /><br />
                {folderLinks.map(folder => (<Gallery key={Math.random()}
                    eventName={folder.name}
                    desc={folder.desc}
                    images={folder.links} />))}
                {/* <Gallery eventName="Event-2" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt exercitationem veritatis officia nulla ipsam beatae! Laboriosam atque porro accusamus consectetur, dolorum odio voluptatum vel" images={images}></Gallery>
                <Gallery eventName="Event-3" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt exercitationem veritatis officia nulla ipsam beatae! Laboriosam atque porro accusamus consectetur, dolorum odio voluptatum vel" images={images}></Gallery> */}

            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const fs = require('fs').promises;
    const path = require('path');
    const process = require('process');
    // const {authenticate} = require('@google-cloud/local-auth');
    console.log('This is a console log from getserversideprops');
    const { google } = require('googleapis');
    const CLIENT_ID = '64981515508-g3deddbotdeqtdq25j8vklb4fh1nmfv7.apps.googleusercontent.com'
    const CLIENT_SECRET = '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'
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
    const REFRESH_TOKEN = '1//04FRC9YzpGJUnCgYIARAAGAQSNwF-L9IrxL7xJZ62Ey2PRJ0g160w_Pj4KOCQFKla009PxajQZdIug_idPNsEjwdOMzqWTTZr1h8'
  
    const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    )
  
    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

    const scopes = [
      'https://www.googleapis.com/auth/drive'
    ];

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
      });

      const fileMetadata = {
          // name: 'Invoices',
          mimeType: 'application/vnd.google-apps.folder'
        };
        let folderLinks = [];
        try {
          const folder = await drive.files.list({ q: "mimeType='application/vnd.google-apps.folder'", fields: 'files(id, name, description)'
          });
          // console.log(folder.data.files);
           folderLinks = await Promise.all(folder.data.files.map(async folder => {
            // const foldername = folder.name;
            // console.log(foldername);
            // Get a list of all the images in the folder
            console.log('folder id: ', folder.id);
            
            const images = await drive.files.list({ q: `mimeType='image/jpeg' or mimeType='image/png' and parents in '${folder.id}'` });
            // const images = await drive.files.list({ q: `mimeType='image/jpeg' or mimeType='image/png' and parents in '${folder.id}'` });
            console.log(images.data.files);
            // Map over the list of images and get the public link for each one
            const imageLinks = await Promise.all(images.data.files.map(async image => {
              const link = await drive.files.get({ fileId: image.id, fields: 'webContentLink' });
              // console.log(link);
              return link.data.webContentLink;
            }));
            // console.log(imageLinks) // imageLinks is an array of links to all the images in the folder
            return { name: folder.name, desc: folder.description, links: imageLinks };
          }))
          // console.log(folderLinks)
        } catch (error) {
          throw error;
        }
    // const folders = await drive.files.list({ q: "mimeType='application/vnd.google-apps.folder' and trashed = false" });
    // console.log(folders);

    

    // const fileMetadata = {
    //   name: 'Invoices',
    //   mimeType: 'application/vnd.google-apps.folder',
    // };
    // try {
    //   const file = await drive.files.create({
    //     resource: fileMetadata,
    //     fields: 'id',
    //   });
    //   console.log('Folder Id:', file.data.id);
    //   // return file.data.id;
    // } catch (err) {
    //   // TODO(developer) - Handle error
    //   throw err;
    // }
    
  
    return {
      props: {folderLinks}, // will be passed to the page component as props
    }
  }
