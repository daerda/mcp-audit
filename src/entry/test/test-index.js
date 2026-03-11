import { auditPackage } from '../index.js';

// // 本地工程审计
// auditPackage(
//   `/Users/shisui/Desktop/cheen-project`,
//   `/Users/shisui/Desktop/cheen-project.md`
// ).then(() => {
//   console.log('本地工程审计完成');
// });

// 远程工程审计
auditPackage(
  `https://github.com/daerda/cheen-project`,
  `/Users/shisui/Desktop/cheen-project-git.md`
).then(() => {
  console.log('远程工程审计完成');
});
