import { InputData  } from './vega/commands/v1/transaction'
const atob = (b64: string) => Buffer.from(b64, 'base64').toString('binary');
const btoa = (bin: string) => Buffer.from(bin, 'binary').toString('base64');

export function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}


const tx = "CuwBCLa0y7OuxIaMdhAcon3cAQpCMHhkOWM0NmMzZTcwMGM4YTM0Mjk0M2RkNmUzNjlhYzk0NzU4N2FmNDdlY2M0NzdkYjM5Y2UxZjU2NzM2YTYyYzIy6j6UAQgDEJO81wXKPokBCioweGM5MzEzN2Y5RjRCODIwQ2E4NUZmQTNDN2U4NGNDYTZFYmM3YkI1MTcSQGM5ZDljNTlkOWI2ZDhmOGU0MWFlOGNjNWJiZGE5ZThkODA2MzU2MTU3YTBkN2JmYTQ4NzYxYTNkZjY5MzM5NWEaEzEwMDAwMDAwMDAwMDAwMDAwMDAg6ov1jwYSkwEKgAE4ZjMzZTcwMjY4OGRiNTQ4YWY0NGMxODY3MjJhODZiYjgzOGYyZjM1ODk5N2UxNzlhMzFlOTZhYjY0MjMyYmI1ZmRmMDQ1NDg2MGJjNmEzOTA0ZTA3MjhiYjFjOWZhOGE0MjE2ZmQ3YWI3YWZmNWRkYTkzNjI5MDczNzUyMzkwMRIMdmVnYS9lZDI1NTE5GAGAfQLSPkAzN2QxYTFkMzhlMmQ0MjkwODRkYzMzMWU0YjA3NDUwZGY5YzU2ZTRjNmRhNjJkOWZkNzI3ZjQ0ZGI2MTlkYzAy"
const txDecoded = bytesFromBase64(tx)
const outDecoded = InputData.decode(txDecoded)

console.dir(outDecoded)