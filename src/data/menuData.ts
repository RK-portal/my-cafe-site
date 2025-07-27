export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'coffee',
    label: '珈琲',
    items: [
      { name: '古都ブレンド', price: 600, description: '深煎りの特製ブレンド' },
      { name: '本日の一杯', price: 650, description: '日替わりのシングルオリジン' },
      { name: '水出しアイスコーヒー', price: 700, description: '12時間かけて抽出' },
      { name: 'カフェ・ラテ', price: 680, description: 'エスプレッソとミルクの調和' },
    ],
  },
  {
    id: 'tea',
    label: '紅茶',
    items: [
      { name: 'アールグレイ', price: 650, description: 'ベルガモットの香り' },
      { name: '季節の和紅茶', price: 700, description: '国産茶葉使用' },
    ],
  },
  {
    id: 'other',
    label: 'その他',
    items: [
      { name: '抹茶ラテ', price: 750, description: '京都産抹茶使用' },
      { name: '自家製ジンジャーエール', price: 700, description: '生姜たっぷり' },
    ],
  },
  {
    id: 'sweets',
    label: '甘味',
    items: [
      { name: '和三盆チーズケーキ', price: 700, description: '上品な甘さ' },
      { name: '抹茶のテリーヌ', price: 750, description: '濃厚な抹茶の味わい' },
      { name: '季節のフルーツタルト', price: 800, description: '旬のフルーツを使用' },
      { name: '自家製アイスクリーム', price: 550, description: '日替わりフレーバー' },
    ],
  },
  {
    id: 'meal',
    label: '軽食',
    items: [
      { name: '厚切りバタートースト', price: 600, description: 'はちみつ添え' },
      { name: 'キーマカレー', price: 1200, description: 'スパイス香る本格派' },
      { name: '季節野菜のスープセット', price: 1100, description: 'パン付き' },
    ],
  },
];