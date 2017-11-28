import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';

export default (items) => {

    const {vfs} = vfsFonts.pdfMake;
	pdfMake.vfs = vfs;

    pdfMake.createPdf({content: items.user_name}).download();    
}