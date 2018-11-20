// ----- HTMLに組み込まれるJavaScriptファイル(ここのコードがwebpackで圧縮される) -----

'use strict';

// ダメージ計算モジュールを用いて、HTMLbodyに計算結果を出力
import dc from 'damage-calc';
document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
    dc.effectiveDamage(100, 50, 30) + '</p>');

// cryptoモジュールを用いて、HTMLbodyにランダム文字列を出力
import crypto from 'crypto';
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '</p>');
