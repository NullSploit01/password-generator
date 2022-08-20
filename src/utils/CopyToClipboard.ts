import { copyToClipboard } from 'quasar';

function Copy(value: string): void {
  copyToClipboard(value)
    .then(() => {
      alert('Password Copied to Clipboard!');
    })
    .catch(() => {
      alert('Some Error Occured');
    });
}

export { Copy };
