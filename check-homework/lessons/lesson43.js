const a4_0x275b08=a4_0x47b0;(function(_0x473ed6,_0x3642a6){const _0x1302d2=a4_0x47b0,_0x228781=_0x473ed6();while(!![]){try{const _0x1d896a=-parseInt(_0x1302d2(0x1ce))/0x1+parseInt(_0x1302d2(0x1cb))/0x2*(-parseInt(_0x1302d2(0x1bd))/0x3)+parseInt(_0x1302d2(0x1ca))/0x4+parseInt(_0x1302d2(0x1c0))/0x5*(-parseInt(_0x1302d2(0x1d0))/0x6)+parseInt(_0x1302d2(0x1bf))/0x7+-parseInt(_0x1302d2(0x1d9))/0x8+-parseInt(_0x1302d2(0x1e3))/0x9*(-parseInt(_0x1302d2(0x1d2))/0xa);if(_0x1d896a===_0x3642a6)break;else _0x228781['push'](_0x228781['shift']());}catch(_0x45a2b8){_0x228781['push'](_0x228781['shift']());}}}(a4_0x1abb,0x19cef));function a4_0x47b0(_0xd733a3,_0x2542cf){const _0x1abb93=a4_0x1abb();return a4_0x47b0=function(_0x47b0a0,_0x3e0c49){_0x47b0a0=_0x47b0a0-0x1bd;let _0x4f8cbf=_0x1abb93[_0x47b0a0];return _0x4f8cbf;},a4_0x47b0(_0xd733a3,_0x2542cf);}function a4_0x1abb(){const _0x1a316c=['uuid','728315KcxIyd','115oKVpap','send','find','model/todo.js','Урок\x204.3','lengthOf','application/json','createTodo','expect','toString','182492fScYHO','4Ttgktu','email','then','104603ahTVFC','../../src/model/db','24510RTpCYs','deep','3313070UPjbxe','Обновляет\x20аттрибуты\x20указанного\x20todo','Content-Type','getTodo','have','../../src/model/todo','equal','743856lbbKfX','должен\x20модифицировать\x20указанный\x20todo','_id','init','toArray','chai','patch','stubTestUser','catch','getCollection','9mgyLqS','../../src/server.js','125586vOwRyx'];a4_0x1abb=function(){return _0x1a316c;};return a4_0x1abb();}const {expect}=require(a4_0x275b08(0x1de)),helpers=require('../helpers'),uuid=require(a4_0x275b08(0x1be))['v4'],db=require(a4_0x275b08(0x1cf)),{updateTodo}=require(a4_0x275b08(0x1d7)),request=require('supertest'),app=require(a4_0x275b08(0x1e4));describe(a4_0x275b08(0x1c4),()=>{const _0x19123d=a4_0x275b08;let _0x1ea602;before(async()=>{const _0x17a958=a4_0x47b0;await db[_0x17a958(0x1dc)](),_0x1ea602=await db[_0x17a958(0x1e2)]('todos');}),after(async()=>{await db['close']();}),afterEach(async()=>{await _0x1ea602['deleteMany']();}),describe(_0x19123d(0x1c3),()=>{describe('#updateTodo',()=>{const _0x30f657=a4_0x47b0;it(_0x30f657(0x1d3),async()=>{const _0x28d082=_0x30f657,_0x3a7169=await helpers[_0x28d082(0x1c7)](),_0x1d965a={'foo':uuid()};await updateTodo({'_id':_0x3a7169[_0x28d082(0x1db)][_0x28d082(0x1c9)]()},_0x1d965a);const _0x5f45f6=await _0x1ea602[_0x28d082(0x1c2)]()[_0x28d082(0x1dd)]();expect(_0x5f45f6)['to'][_0x28d082(0x1d6)][_0x28d082(0x1c5)](0x1),expect(_0x5f45f6[0x0])['to'][_0x28d082(0x1d1)][_0x28d082(0x1d8)]({..._0x3a7169,..._0x1d965a});});});}),describe('#PATCH\x20/api/v1/todos/:id',()=>{const _0x23073a=_0x19123d,_0x288fe9={'title':uuid()};it(_0x23073a(0x1da),async()=>{const _0x1ab388=_0x23073a,_0x5c0f59=helpers[_0x1ab388(0x1e0)]()[_0x1ab388(0x1cc)],_0x2c0654=await helpers['createTodo']({'foo':uuid(),'email':_0x5c0f59});return new Promise((_0x3bd578,_0x5097b4)=>{const _0x5106fc=_0x1ab388;request(app['callback']())[_0x5106fc(0x1df)]('/api/v1/todos/'+_0x2c0654['_id'])['set'](_0x5106fc(0x1d4),_0x5106fc(0x1c6))[_0x5106fc(0x1c1)](JSON['stringify'](_0x288fe9))[_0x5106fc(0x1c8)](0xcc)[_0x5106fc(0x1cd)](()=>helpers[_0x5106fc(0x1d5)](_0x2c0654[_0x5106fc(0x1db)]))['then'](_0x1abd07=>expect(_0x1abd07)['to'][_0x5106fc(0x1d1)]['equal']({..._0x2c0654,..._0x288fe9}))['then'](_0x3bd578)[_0x5106fc(0x1e1)](_0x5097b4);});});});});