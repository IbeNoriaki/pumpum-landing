import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-8">Pumpum 利用規約</h1>
      <div className="prose prose-sm max-w-none">
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">第1条（総則）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>ユーザーは、本サービスに登録し、もしくは利用を開始した時点で本規約の内容に同意したものとみなします。</li>
              <li>当社は、ユーザーに事前の通知を行ったうえで、本規約を改訂できるものとします。改訂後の規約内容は当社ウェブサイトまたは本サービス内に掲示した時点で効力を生じ、ユーザーが継続して本サービスを利用した場合、改訂後の規約に同意したものとみなされます。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第2条（本サービスの概要）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>当社は、ユーザーがクレジットカード等で前払式支払手段（有効期限6ヶ月、以下「ポイント」といいます）を購入し、これを用いてクリエイターに投げ銭（応援）を行う機能を提供します。</li>
              <li>投げ銭に伴い、ユーザーはProof（応援の証）としてクリエイターの発行するデジタルトークン（以下「クリエイターToken」といいます）を取得する場合があります。クリエイターTokenは金銭的価値や役務提供を約束するものではなく、単なるデジタルアイテムです。</li>
              <li>本サービスは、ブロックチェーン上で行われる電子署名・トランザクションの情報を転送するUI/UXを提供しますが、ユーザーが行う電子署名の内容や結果について、当社はいかなる保証・責任も負いません。</li>
              <li>当社は暗号資産交換業や資金移動業等を行うものではなく、ユーザー同士またはユーザーと第三者間のトークン売買・交換に関与しません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第3条（ポイントの購入と利用）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>ユーザーは、当社指定の決済手段を用いてポイントを購入し、本サービス内で投げ銭（応援）等に使用できます。</li>
              <li>ポイントには発行日から6ヶ月の有効期限があり、有効期限を過ぎると失効します。失効したポイントに関しては、当社は払い戻しや補償を一切行いません。</li>
              <li>ポイントは法定通貨への換金を目的とするものではなく、本サービス内の応援・投げ銭行為に限定して利用できるプリペイド（前払式支払手段）です。</li>
              <li>ポイント購入後のキャンセル・返金は原則としてできません。サービスに重大な瑕疵がある場合を除き、一切の返金・払い戻しを行わないことをユーザーは承諾します。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第4条（電子署名と責任範囲）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>本サービスは、ユーザーがPasskey等を用いて電子署名を行う環境を提供しますが、その電子署名はユーザー本人の責任においてなされるものであり、当社は署名内容やトランザクションの実行結果について一切責任を負いません。</li>
              <li>ユーザーは、ウォレットの秘密鍵やパスキーを厳重に管理し、不正使用等から自己を防御する義務を負います。当社は、ウォレットの漏洩や第三者による不正アクセスに起因する損害について責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第5条（手数料および利用料）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>当社は、本サービスを通じて電子署名の転送やトークン発行・管理のためのインフラを提供しており、各種の利用行為に対して手数料または利用料を徴収する場合があります。</li>
              <li>具体的な手数料額や算定方法は、利用場面ごとに本サービス内で明示します。ユーザーは、当該手数料が明示されたうえで操作を行った場合、手数料の支払義務に同意したものとみなされます。</li>
              <li>当社は、必要に応じて手数料や利用料の水準・種類を変更できるものとし、変更を行う場合、本サービス内または当社ウェブサイト上で事前告知を行います。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第6条（禁止事項）</h2>
            <div className="mt-2">
              ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>法令または公序良俗に反する行為</li>
                <li>犯罪行為やその準備または関与となる行為、マネーロンダリング行為</li>
                <li>第三者の権利を侵害する行為（知的財産権、肖像権、プライバシー権等）</li>
                <li>当社が提供するUI/UXを改変、逆コンパイル、リバースエンジニアリング等する行為</li>
                <li>当社または第三者に過度の負担をかけ、正常な運営を妨害する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第7条（サービスの停止・終了）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>当社は、システム障害やメンテナンス、行政当局の要請等、やむを得ない事情がある場合、ユーザーへ事前通知することなく本サービスの全部または一部を停止または終了することができます。</li>
              <li>当社は、本サービスの停止・終了により発生したユーザーの損害・不利益について、一切責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第8条（免責事項）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>当社は、本サービスを現状有姿で提供しており、その完全性、正確性、有用性、特定目的適合性を保証しません。</li>
              <li>クリエイターTokenの価格や流動性の有無について、当社は関与せず、いかなる保証も行いません。ユーザーがTokenを第三者と売買・交換する場合も、あくまでユーザー自身の責任で行うものとします。</li>
              <li>ユーザー間のトラブル、ユーザーとクリエイターの間の紛争等に関して、当社はいかなる責任も負いません。</li>
              <li>当社の故意または重過失による場合を除き、当社がユーザーに負う賠償責任は、ユーザーが過去1ヶ月間に当社に支払った手数料・利用料の合計額を上限とします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第9条（準拠法および合意管轄）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>本規約は日本法に準拠し、これに従って解釈されます。</li>
              <li>本規約または本サービスに関連して生じる一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第10条（お問い合わせ先）</h2>
            <div className="mt-2">
              株式会社Teliha<br />
              〒810-0041 福岡県福岡市中央区大名2-6-11<br />
              Email: support@prex0.com
            </div>
          </section>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link href="/">ホームに戻る</Link>
        </Button>
      </div>
    </div>
  );
} 