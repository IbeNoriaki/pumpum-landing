"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: "Pricing", url: "#" },
  { text: "Contact", url: "#" },
];

interface LegalDocument {
  title: string;
  content: string;
}

const legalDocs: LegalDocument[] = [
  {
    title: "Pumpum 利用規約",
    content: `第1条（総則）
1. ユーザーは、本サービスに登録し、もしくは利用を開始した時点で本規約の内容に同意したものとみなします。
2. 当社は、ユーザーに事前の通知を行ったうえで、本規約を改訂できるものとします。改訂後の規約内容は当社ウェブサイトまたは本サービス内に掲示した時点で効力を生じ、ユーザーが継続して本サービスを利用した場合、改訂後の規約に同意したものとみなされます。

第2条（本サービスの概要）
1. 当社は、ユーザーがクレジットカード等で前払式支払手段（有効期限6ヶ月、以下「ポイント」といいます）を購入し、これを用いてクリエイターに投げ銭（応援）を行う機能を提供します。
2. 投げ銭に伴い、ユーザーはProof（応援の証）としてクリエイターの発行するデジタルトークン（以下「クリエイターToken」といいます）を取得する場合があります。クリエイターTokenは金銭的価値や役務提供を約束するものではなく、単なるデジタルアイテムです。
3. 本サービスは、ブロックチェーン上で行われる電子署名・トランザクションの情報を転送するUI/UXを提供しますが、ユーザーが行う電子署名の内容や結果について、当社はいかなる保証・責任も負いません。
4. 当社は暗号資産交換業や資金移動業等を行うものではなく、ユーザー同士またはユーザーと第三者間のトークン売買・交換に関与しません。

第3条（ポイントの購入と利用）
1. ユーザーは、当社指定の決済手段を用いてポイントを購入し、本サービス内で投げ銭（応援）等に使用できます。
2. ポイントには発行日から6ヶ月の有効期限があり、有効期限を過ぎると失効します。失効したポイントに関しては、当社は払い戻しや補償を一切行いません。
3. ポイントは法定通貨への換金を目的とするものではなく、本サービス内の応援・投げ銭行為に限定して利用できるプリペイド（前払式支払手段）です。
4. ポイント購入後のキャンセル・返金は原則としてできません。サービスに重大な瑕疵がある場合を除き、一切の返金・払い戻しを行わないことをユーザーは承諾します。

第4条（電子署名と責任範囲）
1. 本サービスは、ユーザーがPasskey等を用いて電子署名を行う環境を提供しますが、その電子署名はユーザー本人の責任においてなされるものであり、当社は署名内容やトランザクションの実行結果について一切責任を負いません。
2. ユーザーは、ウォレットの秘密鍵やパスキーを厳重に管理し、不正使用等から自己を防御する義務を負います。当社は、ウォレットの漏洩や第三者による不正アクセスに起因する損害について責任を負いません。

第5条（手数料および利用料）
1. 当社は、本サービスを通じて電子署名の転送やトークン発行・管理のためのインフラを提供しており、各種の利用行為に対して手数料または利用料を徴収する場合があります。
2. 具体的な手数料額や算定方法は、利用場面ごとに本サービス内で明示します。ユーザーは、当該手数料が明示されたうえで操作を行った場合、手数料の支払義務に同意したものとみなされます。
3. 当社は、必要に応じて手数料や利用料の水準・種類を変更できるものとし、変更を行う場合、本サービス内または当社ウェブサイト上で事前告知を行います。

第6条（禁止事項）
ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
(1) 法令または公序良俗に反する行為
(2) 犯罪行為やその準備または関与となる行為、マネーロンダリング行為
(3) 第三者の権利を侵害する行為（知的財産権、肖像権、プライバシー権等）
(4) 当社が提供するUI/UXを改変、逆コンパイル、リバースエンジニアリング等する行為
(5) 当社または第三者に過度の負担をかけ、正常な運営を妨害する行為
(6) その他、当社が不適切と判断する行為

第7条（サービスの停止・終了）
1. 当社は、システム障害やメンテナンス、行政当局の要請等、やむを得ない事情がある場合、ユーザーへ事前通知することなく本サービスの全部または一部を停止または終了することができます。
2. 当社は、本サービスの停止・終了により発生したユーザーの損害・不利益について、一切責任を負いません。

第8条（免責事項）
1. 当社は、本サービスを現状有姿で提供しており、その完全性、正確性、有用性、特定目的適合性を保証しません。
2. クリエイターTokenの価格や流動性の有無について、当社は関与せず、いかなる保証も行いません。ユーザーがTokenを第三者と売買・交換する場合も、あくまでユーザー自身の責任で行うものとします。
3. ユーザー間のトラブル、ユーザーとクリエイターの間の紛争等に関して、当社はいかなる責任も負いません。
4. 当社の故意または重過失による場合を除き、当社がユーザーに負う賠償責任は、ユーザーが過去1ヶ月間に当社に支払った手数料・利用料の合計額を上限とします。

第9条（準拠法および合意管轄）
1. 本規約は日本法に準拠し、これに従って解釈されます。
2. 本規約または本サービスに関連して生じる一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。

第10条（お問い合わせ先）
株式会社Teliha
〒810-0041 福岡県福岡市中央区大名2-6-11
Email: support@prex0.com`,
  },
  {
    title: "クリエイター規約",
    content: `第1条（総則）
1. クリエイターは、本追加規約および「Pumpum 利用規約」の両方に同意し、本サービス上でクリエイターTokenを発行します。
2. 本追加規約に定めのない事項については、「Pumpum 利用規約」が適用されます。

第2条（Token発行と初期費用）
1. クリエイターは、当社が定める方法で、クリエイターTokenの発行を依頼し、当社に対して所定の初期費用や発行手数料を支払うものとします。その詳細および金額は、本サービス上で明示されます。
2. 当社は、クリエイターからの依頼に基づき、ブロックチェーン上でクリエイターTokenをMintし、ユーザーが投げ銭時にProofとして受け取れるよう設定を行います。
3. クリエイターは、電子署名の実行やブロックチェーントランザクション費用（ガス代等）について、当社が別途定める場合は、あらかじめ同意のうえ負担するものとします。

第3条（投げ銭とクリエイターTokenの付与）
1. ユーザーが投げ銭（ポイントの送付）を行うと、内部的にはクリエイターTokenとポイントの交換処理が自動的に行われ、ユーザーウォレットにクリエイターTokenが付与される場合があります。
2. クリエイターは、投げ銭により獲得したポイントやトークンの取引に関する最終責任は自らが負い、当社がこれを保証しないことを了承します。
3. 当社が適宜設定・表示する電子署名のデータ転送費用（利用料）やプラットフォーム利用料などが発生する場合、クリエイターはこれを確認のうえ同意し、支払うものとします。

第4条（クリエイターTokenの性質）
1. クリエイターTokenは、投げ銭に対する応援の証（Proof）としての機能のみを予定しており、いかなる金銭的価値、配当、または特典を保証するものではありません。
2. クリエイターは、ユーザーからの問い合わせ等に対し、クリエイターTokenが投資商品や通貨代替手段ではないことを明示し、誤解を与えないように努めるものとします。
3. クリエイターTokenの二次流通が行われた場合でも、当社はその結果として発生する価格変動や損益に関して、一切責任を負いません。

第5条（追加免責事項）
1. 当社は、クリエイターTokenの設計・運用を可能にする環境（ブロックチェーン上のコントラクトや電子署名転送機能）を提供しますが、その技術的変更や停止が発生した場合、クリエイターは異議なくこれを受容するものとします。
2. クリエイターTokenの売買や交換に際し、クリエイター自身が保有するトークンを売却して法定通貨等に変換したい場合も、これはあくまでブロックチェーン上の取引所や分散型取引所（DEX）、あるいはユーザー間取引に委ねられるものであり、当社はその成立や価格を一切保証しません。

第6条（契約終了）
1. クリエイターが本追加規約に違反した場合、または当社がやむを得ない事由により本サービスを終了する場合、当社はクリエイターに事前通知の上でToken発行にかかるサービスを停止することができます。
2. 本追加規約終了後も、第4条（クリエイターTokenの性質）、第5条（追加免責事項）の効力は存続します。

第7条（お問い合わせ先）
株式会社Teliha
〒810-0041 福岡県福岡市中央区大名2-6-11
Email: support@prex0.com`,
  },
  {
    title: "特定商取引法に基づく表記",
    content: `【販売業者】
株式会社Teliha

【運営責任者】
部谷 修平

【所在地】
〒810-0041 福岡県福岡市中央区大名2-6-11

【お問い合わせ先】
・メールアドレス: support@prex0.com
・お問い合わせはメールのみで承っております。電話でのお問い合わせは対応しておりません。

【販売価格】
・当社が運営するプラットフォーム「Pumpum」上で販売するポイント（前払式支払手段）等の価格は、購入画面・サービス内UIに表示しております。料金は税込価格で表示しています。 
・クリエイターへの投げ銭（応援）機能を利用する場合に発生する手数料や利用料については、各利用画面で明示しております。

【商品代金以外の必要料金】
・消費税（料金に含まれている場合を除く）
・銀行振込の場合は振込手数料
・インターネット接続料金および通信費（お客様のご負担となります）
・ブロックチェーン上でトランザクションが発生する場合に必要な手数料（ガス代）等

【支払方法および支払時期】
・支払方法：クレジットカード、銀行振込、その他の方法（詳細は各サービスページ・購入画面をご確認ください）
・支払時期：クレジットカードの場合は、各カード会社の規定に基づきます。銀行振込の場合は、ご注文（購入）後7日以内にお支払いください。

【サービス提供時期】
・ポイントの購入手続き完了後、即時または当社システムでの反映確認後、速やかにポイントが付与され、本サービス（投げ銭機能など）を利用可能となります。
・その他の有料サービスやプランについては、サービスページに記載の条件・時期に従います。

【キャンセル・解約について】
・ポイントの性質上、購入完了後のキャンセルおよび返金は原則としてお受けできません。
・ポイントは有効期限（発行日から6ヶ月）を過ぎると失効し、失効後の払い戻しや補償は行いません。
・サービスに重大な瑕疵が認められる場合等を除き、返金対応はいたしかねます。詳しくは利用規約をご確認ください。

【動作環境】
・本サービスの利用に必要な推奨環境（対応ブラウザ・OS・Passkey対応機器など）は、サービスページにてご案内しております。推奨環境以外での動作保証は致しかねます。

【特別条件（定期契約・自動更新など）】
・当社が提供する定期契約サービス（サブスクリプション形式）を別途利用する場合は、契約期間や更新条件、解約手続き等を利用規約や各サービスページにて定めておりますのでご確認ください。
・ポイントの有効期限および利用範囲は、本サービスの利用規約に記載された内容に準じます。`,
  },
];

export function Footer() {
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);

  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10 container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Icons.logo className="h-5 w-5" />
          <h2 className="text-lg font-bold text-foreground">
            {siteConfig.name}
          </h2>
        </div>

        <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-muted-foreground md:flex-row md:items-center">
          {legalDocs.map((doc, index) => (
            <li key={index}>
              <AlertDialog>
                <AlertDialogTrigger className="text-[15px]/normal font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4">
                  {doc.title}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{doc.title}</AlertDialogTitle>
                    <AlertDialogDescription className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap">
                      {doc.content}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>閉じる</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted-foreground">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
