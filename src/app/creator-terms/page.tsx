import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreatorTermsPage() {
  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-8">クリエイター規約</h1>
      <div className="prose prose-sm max-w-none">
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">第1条（総則）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>クリエイターは、本規約および「Pumpum 利用規約」の両方に同意し、本サービス上でクリエイターTokenを発行します。</li>
              <li>本追加規約に定めのない事項については、「Pumpum 利用規約」が適用されます。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第2条（Token発行と初期費用）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>クリエイターは、当社が定める方法で、クリエイターTokenの発行を依頼し、当社に対して所定の初期費用や発行手数料を支払うものとします。その詳細および金額は、本サービス上で明示されます。</li>
              <li>当社は、クリエイターからの依頼に基づき、ブロックチェーン上でクリエイターTokenをMintし、ユーザーが投げ銭時にProofとして受け取れるよう設定を行います。</li>
              <li>クリエイターは、電子署名の実行やブロックチェーントランザクション費用（ガス代等）について、当社が別途定める場合は、あらかじめ同意のうえ負担するものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第3条（投げ銭とクリエイターTokenの付与）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>ユーザーが投げ銭（ポイントの送付）を行うと、内部的にはクリエイターTokenとポイントの交換処理が自動的に行われ、ユーザーウォレットにクリエイターTokenが付与される場合があります。</li>
              <li>クリエイターは、投げ銭により獲得したポイントやトークンの取引に関する最終責任は自らが負い、当社がこれを保証しないことを了承します。</li>
              <li>当社が適宜設定・表示する電子署名のデータ転送費用（利用料）やプラットフォーム利用料などが発生する場合、クリエイターはこれを確認のうえ同意し、支払うものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第4条（クリエイターTokenの性質）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>クリエイターTokenは、投げ銭に対する応援の証（Proof）としての機能のみを予定しており、いかなる金銭的価値、配当、または特典を保証するものではありません。</li>
              <li>クリエイターは、ユーザーからの問い合わせ等に対し、クリエイターTokenが投資商品や通貨代替手段ではないことを明示し、誤解を与えないように努めるものとします。</li>
              <li>クリエイターTokenの二次流通が行われた場合でも、当社はその結果として発生する価格変動や損益に関して、一切責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第5条（追加免責事項）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>当社は、クリエイターTokenの設計・運用を可能にする環境（ブロックチェーン上のコントラクトや電子署名転送機能）を提供しますが、その技術的変更や停止が発生した場合、クリエイターは異議なくこれを受容するものとします。</li>
              <li>クリエイターTokenの売買や交換に際し、クリエイター自身が保有するトークンを売却して法定通貨等に変換したい場合も、これはあくまでブロックチェーン上の取引所や分散型取引所（DEX）、あるいはユーザー間取引に委ねられるものであり、当社はその成立や価格を一切保証しません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第6条（契約終了）</h2>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>クリエイターが本追加規約に違反した場合、または当社がやむを得ない事由により本サービスを終了する場合、当社はクリエイターに事前通知の上でToken発行にかかるサービスを停止することができます。</li>
              <li>本追加規約終了後も、第4条（クリエイターTokenの性質）、第5条（追加免責事項）の効力は存続します。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">第7条（お問い合わせ先）</h2>
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