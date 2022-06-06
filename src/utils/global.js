export const GRAPHCMS_ENDPOINT =
  'https://api-ap-southeast-2.graphcms.com/v2/cl40qsq302erd01xv3v900bru/master';
export const FAVORITE_URL_DEV = 'https://oddle-challenge-api.herokuapp.com';
export const app_account_name = 'b2072c24-0b89-4f12-bd09-a79f57f5fbd2';
export const app_api_key =
  'Y0kD14hIlWw6JmdMgHnyQJbqNIfJdTh3iR4RHZUNQ11FPNHFdfrx9MwU9BiwdKpU';
export const GRAPHCMS_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ0MDE3NTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5ncmFwaGNtcy5jb20vdjIvY2w0MHFzcTMwMmVyZDAxeHYzdjkwMGJydS9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIxMmI2ZmJlMC04YmRlLTRjMjgtYjMxNC01MjVlNGYxNGQ3NWUiLCJqdGkiOiJjbDQwczM3aG8yZm1oMDF4dmdvaWlnaHg0In0.wjsTNFQLnJc04iwXc6owjlhKUiYPie5D_Rk0jBe22_78Pnz5DfcfBLNFoLnr8ZJdv6oyk52trfkkBiaybNRDa5png-uBPlTVUbJmu9VVCYkBzn58t0vkEcPUdgiZVtK9vB26cv_HhFcGfFbEzTY0_YdgIeYuYlAHD_oyZwbeZ4i1Jt5dLkEqDWs4mtlrE6l2bl8lXc7nStDw2-B7cZMGr9aF-ffIjhMviFml5B5q3v8gs5kaDxfTkxp0ZgVnKYn0dbUmt9pSvGpNDfQrfjMFhXOogZVSejGjLjEKz_gxVYQtSTWZWhvaj3v_0-6yjfDI2cxfHwttqwM_uFccoP45ieMU1_sMhfFp0NNwpdHUSNRVZqYPhxdip5TAlmo_srvcJ5i9l7HI3OpzO5dB0hmfTXqQ1hRWHNJOgahw8IYPeR4tsLqemzoXK1r-BebTKCEhPA2pzIRNiWCNcp-CANt8TbsZzb8i8nZAsuJ3auKPjsRqxge8w9n2IOMsb7yc_uubWi4kD6qwaNXKz2OHYl68cttwCHY5XBFh5mJoic-v7_QzmFjBaRlpStXLpqvFS0EhL-ClkBKG7fceeyDsbwhDHNlQsqT7FxF1dPjpR2ng5o6nhmfieovGf38yhn7hsjp6KAIpR-HX6TUDksTlNlsRLGTXYER01qtu-87H1rpYP34';

export const formatRupiah = (bilangan) => {
  let number_string = bilangan.toString();
  let sisa = number_string.length % 3;
  let rupiah = number_string.substr(0, sisa);
  let ribuan = number_string.substr(sisa).match(/\d{3}/g);
  let separator = '.';

  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return rupiah;
};
export const capitalLetters = (s) => {
  let word = s.toLowerCase();
  return word
    .trim()
    .split(' ')
    .map((i) => i[0].toUpperCase() + i.substr(1))
    .reduce((ac, i) => `${ac} ${i}`);
};
