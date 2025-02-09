import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>
      <div className="prose prose-sm max-w-none">
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">販売業者</h2>
            <p className="mt-2">株式会社Teliha</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">運営責任者</h2>
            <p className="mt-2">部谷 修平</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">所在地</h2>
            <p className="mt-2">〒810-0041 福岡県福岡市中央区大名2-6-11</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">お問い合わせ先</h2>
            <div className="mt-2">
              <p>・メールアドレス: support@prex0.com</p>
              <p>・お問い合わせはメールのみで承っております。電話でのお問い合わせは対応しておりません。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">販売価格</h2>
            <div className="mt-2">
              <p>・当社が運営するプラットフォーム「Pumpum」上で販売するポイント（前払式支払手段）等の価格は、購入画面・サービス内UIに表示しております。料金は税込価格で表示しています。</p>
              <p>・クリエイターへの投げ銭（応援）機能を利用する場合に発生する手数料や利用料については、各利用画面で明示しております。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">商品代金以外の必要料金</h2>
            <ul className="list-disc list-inside mt-2">
              <li>消費税（料金に含まれている場合を除く）</li>
              <li>銀行振込の場合は振込手数料</li>
              <li>インターネット接続料金および通信費（お客様のご負担となります）</li>
              <li>ブロックチェーン上でトランザクションが発生する場合に必要な手数料（ガス代）等</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">支払方法および支払時期</h2>
            <div className="mt-2">
              <p>・支払方法：クレジットカード、銀行振込、その他の方法（詳細は各サービスページ・購入画面をご確認ください）</p>
              <p>・支払時期：クレジットカードの場合は、各カード会社の規定に基づきます。銀行振込の場合は、ご注文（購入）後7日以内にお支払いください。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">サービス提供時期</h2>
            <div className="mt-2">
              <p>・ポイントの購入手続き完了後、即時または当社システムでの反映確認後、速やかにポイントが付与され、本サービス（投げ銭機能など）を利用可能となります。</p>
              <p>・その他の有料サービスやプランについては、サービスページに記載の条件・時期に従います。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">キャンセル・解約について</h2>
            <div className="mt-2">
              <p>・ポイントの性質上、購入完了後のキャンセルおよび返金は原則としてお受けできません。</p>
              <p>・ポイントは有効期限（発行日から6ヶ月）を過ぎると失効し、失効後の払い戻しや補償は行いません。</p>
              <p>・サービスに重大な瑕疵が認められる場合等を除き、返金対応はいたしかねます。詳しくは利用規約をご確認ください。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">動作環境</h2>
            <p className="mt-2">・本サービスの利用に必要な推奨環境（対応ブラウザ・OS・Passkey対応機器など）は、サービスページにてご案内しております。推奨環境以外での動作保証は致しかねます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">特別条件（定期契約・自動更新など）</h2>
            <div className="mt-2">
              <p>・当社が提供する定期契約サービス（サブスクリプション形式）を別途利用する場合は、契約期間や更新条件、解約手続き等を利用規約や各サービスページにて定めておりますのでご確認ください。</p>
              <p>・ポイントの有効期限および利用範囲は、本サービスの利用規約に記載された内容に準じます。</p>
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