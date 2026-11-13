(()=>{
const IMG='img/bot.png',GREET='Xin chào, tôi có thể giúp gì cho bạn.',TIP='Mình là trợ lý ThinkCards';
const FALL='Mình chưa có thông tin về câu hỏi này. Mình có thể giúp bạn về:\n• ThinkCards là gì, bộ có bao nhiêu thẻ\n• Lợi ích, công dụng của bộ thẻ\n• Trình độ A2, B1 là gì\n• 3 cấp độ tư duy\n• Cấu trúc một thẻ, kích thước, in ấn\n• Cách dùng trên lớp\n• Giá, đăng ký và nơi nhận sản phẩm';
const INTRO='ThinkCards English A2-B1 là bộ thẻ tiếng Anh tư duy chuyên sâu dành cho học sinh THPT, gồm 100 thẻ tình huống thực tế hoàn toàn không trùng lặp.\nKhác với cách học từ vựng, ngữ pháp truyền thống dễ nhàm chán, bộ thẻ kích thích tư duy đa chiều, giúp phát triển 4 kỹ năng: Nghe - Nói - Đọc - Suy luận logic.';
const BEN='Lợi ích và công dụng của bộ thẻ ThinkCards English A2-B1:\n• Phát triển toàn diện 4 kỹ năng và tư duy: Giúp học sinh THPT rèn luyện Nghe - Nói - Đọc và suy luận logic thông qua 100 tình huống thực tế không trùng lặp.\n• Thúc đẩy tư duy qua 3 cấp độ từ cơ bản đến nâng cao:\n   - Cấp 1 (Nhận biết - 45 thẻ): Rèn luyện nghe hiểu chi tiết và trả lời câu hỏi hoàn chỉnh.\n   - Cấp 2 (Thông hiểu - 15 thẻ): Nắm bắt ý chính, diễn đạt lại bằng ngôn ngữ bản thân và dùng từ nối chuẩn xác.\n   - Cấp 3 (Vận dụng & Suy luận - 40 thẻ): Suy đoán, giải thích hiện tượng, đưa ra lời khuyên với lập luận logic.\n• Hỗ trợ thực hành linh hoạt: Phù hợp cho cả hoạt động cặp đôi tại lớp (5-7 phút) lẫn tự học tại nhà.\n• Cung cấp hệ sinh thái học tập tối ưu trên thẻ: Mỗi thẻ tích hợp sẵn đoạn văn mẫu (A2-B1), câu hỏi định hướng, từ khóa, mẫu câu trả lời, đáp án tham khảo và bài tập nâng cao (Challenge) cho học sinh giỏi.';
const LA2='Trình độ A2 là cấp độ tiếng Anh sơ cấp (Elementary) theo [Khung tham chiếu ngôn ngữ chung Châu Âu (CEFR)](https://www.efset.org/vi/cefr/a2/) và là Bậc 2 trong Khung năng lực ngoại ngữ 6 bậc của Việt Nam';
const LB1='Trình độ B1 (bậc Trung cấp/Independent User theo [Khung tham chiếu châu Âu CEFR](https://zim.vn/trinh-do-a1-a2-b1-b2-c1-c2-la-gi) và Bậc 3 theo [Khung năng lực ngoại ngữ 6 bậc Việt Nam](https://vstep.edu.vn/chung-chi-tieng-anh-b1-la-gi)) là mức độ sử dụng ngoại ngữ độc lập ở mức cơ bản đến trung bình.';
const TEST='Bài kiểm tra đánh giá năng lực gồm 10 câu chia đều làm 3 mức độ (Nhận biết, Thông hiểu, Vận dụng) mang lại những tác dụng thực tế sau:\n• Đánh giá toàn diện năng lực: Giúp đo lường chính xác các cấp độ tư duy của học sinh từ thấp đến cao (nhớ, hiểu, vận dụng linh hoạt).\n• Phân hóa người học hiệu quả: Dễ dàng phân loại trình độ học sinh (trung bình, khá, giỏi) dựa trên độ khó tăng dần của các câu hỏi.';
const BP=['Xem bảng giá','banggia.html'];
// [từ khóa không dấu, câu trả lời, nút (tuỳ chọn)]
const K=[
[[' xin chao ',' chao ',' hello ',' hi ',' alo '],'Xin chào! Bạn muốn tìm hiểu gì về ThinkCards: bộ thẻ, 3 cấp độ, cách dùng hay giá?'],
[['thinkcards la gi','thinkcard la gi','gioi thieu','tong quan','san pham gi','hoc lieu gi','bo the gi','la gi vay','gia tri cot loi','diem noi bat','uu diem'],INTRO+'\nĐiểm nổi bật: tính ứng dụng cao (hoạt động cặp đôi 5-7 phút hoặc tự học), cấu trúc chuẩn hóa khoa học và quy cách in tối ưu.'],
[['tom tat','tom luoc','tom gon','noi dung web','noi dung trang','noi dung website','noi dung cua web','tong hop noi dung','web nay noi ve','web nay la gi','website nay','trang web nay','trang nay noi ve','tong quan noi dung','cho minh biet noi dung','noi dung chinh','y chinh'],'ThinkCards English A2-B1 là bộ học liệu gồm 100 thẻ tình huống tiếng Anh dành cho học sinh THPT, được chia thành 3 cấp độ từ nhận biết, thông hiểu đến vận dụng và suy luận. Mỗi thẻ cung cấp đoạn văn, câu hỏi, từ khóa gợi ý, mẫu câu trả lời và thử thách nâng cao. Sản phẩm giúp học sinh rèn luyện toàn diện kỹ năng nghe, nói, đọc, khả năng phản xạ giao tiếp và tư duy logic thông qua các tình huống thực tế. Bộ thẻ phù hợp cho cả hoạt động học tập theo cặp trên lớp và tự học tại nhà.'],
[['bao nhieu the','so luong','100 the','tong so the','bo gom','co may the','bao nhieu tinh huong','100 tinh huong'],'Bộ đầy đủ gồm 100 thẻ tình huống, chia 3 cấp độ:\n• Nhận biết: 45 thẻ (Card 1-45)\n• Thông hiểu: 15 thẻ (Card 46-60)\n• Vận dụng & Suy luận: 40 thẻ (Card 61-100)\nTrên website bạn có thể dùng thử 15 thẻ mẫu miễn phí (5 thẻ mỗi cấp độ).'],
[['3 cap','ba cap','cap do','muc do','phan cap','thang do','cac cap'],'Bộ thẻ chia 3 cấp độ tăng dần theo thang đo tư duy:\n• Cấp 1 - Nhận biết (Listen & Answer): 45 thẻ, màu xanh dương\n• Cấp 2 - Thông hiểu (Listen & Retell): 15 thẻ, màu xanh lá\n• Cấp 3 - Vận dụng (Think & Reason): 40 thẻ, màu cam\nBạn muốn mình nói rõ cấp nào?'],
[['cap 1','cap do 1','muc do 1','muc 1','nhan biet','listen answer','listen and answer','nghe tra loi','45 the'],'Cấp 1 - Nhận biết (Listen & Answer - Nghe & Trả lời): 45 thẻ (Card 1-45).\nMục tiêu: rèn kỹ năng nghe hiểu thông tin chi tiết (ai, cái gì, ở đâu, khi nào, vì sao).\nNgôn ngữ: trả lời bằng câu hoàn chỉnh, ví dụ "She gets up at..." / "He goes by...".'],
[['cap 2','cap do 2','muc do 2','muc 2','thong hieu','retell','ke lai','listen and retell'],'Cấp 2 - Thông hiểu (Listen & Retell - Nghe & Kể lại): 15 thẻ (Card 46-60).\nMục tiêu: nắm bắt ý chính và diễn đạt lại bằng ngôn ngữ của bản thân.\nNgôn ngữ: liên kết ý bằng các từ nối and, but, so, because, then.'],
[['cap 3','cap do 3','muc do 3','muc 3','van dung','suy luan','think reason','think and reason','40 the','phan bien'],'Cấp 3 - Vận dụng (Think & Reason - Suy luận): 40 thẻ (Card 61-100).\nMục tiêu: vận dụng manh mối để suy đoán, giải thích hiện tượng và đưa ra lời khuyên.\nNgôn ngữ: diễn đạt kèm lập luận logic với probably, may, might, should, because.'],
[['ky nang','nghe noi doc','4 ky nang','ren luyen','phat trien gi'],'Bộ thẻ giúp người học phát triển toàn diện 4 kỹ năng: Nghe - Nói - Đọc - Suy luận logic, thông qua 100 tình huống thực tế.'],
[['cau truc','support','task','mot the','mat the','mat truoc','mat sau','key words','keywords','answer starters','challenge','dap an','gom nhung gi','noi dung the','ben trai','ben phai','anatomy','co gi tren the'],'Mỗi thẻ có 2 mặt rõ ràng:\n• Bên trái - Nhiệm vụ (Task): số thứ tự và tên thẻ, nhóm thẻ, đoạn văn ngắn chuẩn A2-B1, 3 câu hỏi định hướng tư duy.\n• Bên phải - Gợi ý & Đáp án (Support): Key words (từ khóa), Answer starters (mẫu câu mở đầu), Suggested answers (đáp án tham khảo) và Challenge (nhiệm vụ nâng cao cho học sinh khá giỏi).'],
[['kich thuoc','a4','in an','khoi giay','ep plastic','plastic','cat the','quy cach','bao nhieu cm',' cm '],'Bộ thẻ in trên khổ A4 ngang (4 thẻ/trang). Kích thước chuẩn sau khi cắt là 14 × 9.7 cm, thuận tiện ép plastic để sử dụng lâu dài.'],
[['cach dung','cach su dung','su dung','quy trinh','tren lop','lop hoc','cap doi','pair work','huong dan','dung nhu the nao','hoat dong','dung the nao','choi the nao'],'Quy trình hoạt động theo cặp (3-7 phút) trên lớp:\n1. Lựa chọn thẻ: giáo viên chọn 5-8 thẻ phù hợp mục tiêu bài học (đi từ xanh dương → xanh lá → cam).\n2. Tương tác cặp đôi: học sinh A đọc to đoạn văn và nêu câu hỏi; học sinh B trả lời mà không nhìn thẻ.\n3. Hỗ trợ & đối chiếu: học sinh A dùng cột gợi ý bên phải để cung cấp từ khóa/mẫu câu và đối chiếu đáp án.\n4. Đổi vai & thử thách: hai bạn đổi vai; học sinh khá giỏi làm thêm Challenge.\n5. Tổng kết: giáo viên mời vài cặp trình bày, nhận xét và sửa lỗi phát âm, ngữ pháp phổ biến.'],
[['doi tuong','danh cho ai','phu hop','lop may','thpt','tu hoc','trung tam','trinh do','a2 b1',' a2 ',' b1 ','giao vien'],'ThinkCards được thiết kế riêng cho học sinh THPT ở trình độ A2-B1. Bộ thẻ phù hợp cho hoạt động cặp đôi trong lớp học (5-7 phút/hoạt động) tại trường học, trung tâm ngoại ngữ, hoặc để học sinh tự học tại nhà.'],
[[' gia ','bao nhieu tien','gia ca','gia tien',' mua ','dat mua','chi phi','thanh toan','bang gia','ban gia','bo giao vien','bo hoc sinh'],'Giá bán dự kiến:\n• Bộ thẻ in Giáo viên: 169.000đ (100 thẻ khổ lớn 14 x 9,7 cm, giấy couche dày, hộp đựng, tặng tài khoản Giáo viên trực tuyến 1 năm)\n• Bộ thẻ in Học sinh: 69.000đ (100 thẻ khổ nhỏ khoảng 10 x 7 cm, giấy bìa, túi đựng, tặng tài khoản Học sinh trực tuyến 1 năm)\n• Mục ép plastic: +120.000đ (Giáo viên) / +80.000đ (Học sinh)\n• Gói trực tuyến Học sinh: 29.000đ\n• Gói trực tuyến Giáo viên: 99.000đ\n• Gói Nhà trường: 690.000đ\nBạn xem chi tiết ở trang Bảng giá nhé.',BP],
[['dang ky','dang ki','form','lien he','dat hang','cach dat'],'Bạn vào trang Bảng giá, bấm "Đăng ký ngay" ở khung bạn chọn để chuyển tới trang đăng ký mua hàng. Địa điểm nhận sản phẩm: THPT Trần Khai Nguyên.',BP],
[['nhan san pham','dia diem','o dau','nhan o','nhan hang','tran khai nguyen','nhan the'],'Địa điểm nhận sản phẩm: THPT Trần Khai Nguyên.'],
[['cam ket','chat luong','ben dep','chuan quoc te','khong trung lap','sac net','bao ve'],'Cam kết chất lượng: nội dung biên soạn chuẩn quốc tế, không trùng lặp, in ấn sắc nét, bền đẹp với lớp ép plastic bảo vệ.'],
[['tang kem','khuyen mai','cam nang','qua tang','tro choi lop'],'Khi đặt mua bộ thẻ, bạn được tặng kèm cẩm nang hướng dẫn trò chơi lớp học.'],
[['dung thu','mien phi','xem thu','the mau','trai nghiem','demo'],'Bạn có thể dùng thử 15 thẻ miễn phí ngay trên website: vào phần 3 mức độ, bấm vào từng mức độ để xem thẻ mẫu, bấm vào thẻ để lật và bấm "Nghe" để nghe giọng đọc.'],
[['giong doc','nghe doc the','ai doc','phat am'],'Khi xem thẻ mẫu, bạn bấm nút "Nghe" để nghe giọng đọc tiếng Anh, bấm "Dừng" để dừng và "Đọc lại từ đầu" để nghe lại.'],
[['cam on','thanks','thank'],'Không có gì ạ! Cần biết thêm gì về ThinkCards, bạn cứ hỏi mình nhé 😊'],
[['tam biet','bye','hen gap'],'Tạm biệt bạn! Chúc bạn học tiếng Anh thật vui nhé 👋'],
[['ban la ai','ten gi','ai vay','tro ly'],'Mình là trợ lý ThinkCards, mình giúp bạn tìm hiểu về bộ thẻ tiếng Anh tư duy ThinkCards English A2-B1.']
];
let NAME=window.tcName||'';try{NAME=NAME||localStorage.getItem('tc_name')||''}catch(e){}
const pz=t=>NAME?t.replace(/(^|[^\p{L}])[Bb]ạn(?![\p{L}])/gu,(m,a)=>a+NAME):t;
const norm=s=>' '+s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,' ')+' ';
// ===== Thẻ Task / Support: hỏi thẻ nào trả lời thẻ đó =====
const TASK='Thẻ Task (mặt trái - Nhiệm vụ) gồm:\n• Số thứ tự và tên thẻ, nhóm thẻ\n• Đoạn văn ngắn chuẩn A2-B1\n• 3 câu hỏi định hướng tư duy\nChức năng: đây là mặt để học sinh A đọc to đoạn văn và nêu câu hỏi, còn học sinh B trả lời mà không nhìn thẻ.';
const SUP='Thẻ Support (mặt phải - Gợi ý & Đáp án) gồm:\n• Key words (từ khóa)\n• Answer starters (mẫu câu mở đầu)\n• Suggested answers (đáp án tham khảo)\n• Challenge (nhiệm vụ nâng cao cho học sinh khá giỏi)\nChức năng: học sinh A dùng mặt này để gợi ý từ khóa, mẫu câu cho bạn và đối chiếu đáp án.';
const FS=/ (support|goi y|dap an|mat phai|ben phai|key words|keywords|answer starters|suggested answers|challenge|tu khoa|mau cau) /,FT=/ (task|nhiem vu|mat trai|ben trai|cau hoi dinh huong|doan van) /;
// ===== Từ đồng nghĩa: gặp cụm bên trái thì hiểu như từ khóa bên phải =====
const SYN=[
[['tinh nang','chuc nang','thanh phan','cau tao','bo cuc','dac diem','tac dung','vai tro','y nghia','gom gi','co gi','chua gi','hien thi gi','bao gom','de lam gi','dung de lam gi','de lam chi','gom nhung gi','co nhung gi','co cai gi','co nhung phan nao','gom may phan','la gi tren the'],'cau truc'],
[['hoc phi','phi bao nhieu','het bao nhieu','mat bao nhieu','gia bao nhieu','may tien','nhieu tien','gia sao','gia the nao','re khong','dat khong','tien the'],'gia ca'],
[['ap dung','trien khai','to chuc','day hoc','giang day','van hanh','tien hanh','cach choi','choi sao','hoc sao','hoc nhu the nao','dung sao','dung ra sao','su dung sao','xai sao','cach xai','cach xai the'],'cach su dung'],
[['level','levels','giai doan','bac hoc'],'cap do'],
[['tim hieu','noi ve','cho biet ve','kham pha','la bo gi','la the gi','tot khong','nhu the nao ve thinkcards'],'gioi thieu'],
[['order','mua o dau','mua the nao','mua sao','mua kieu gi','thu tuc','lam sao de mua','lam sao mua'],'dang ky'],
[['choi thu','test','thu nghiem','xem mau','cho xem','xem truoc'],'dung thu'],
[['lop 10','lop 11','lop 12','hoc sinh nao','ai dung duoc','doi tuong nao','thcs','sinh vien'],'danh cho ai'],
[['kich co','kho giay','do lon','khong gian in'],'kich thuoc'],
[['listening','speaking','reading','nghe hieu','noi tieng anh','doc hieu'],'ky nang'],
[['lay hang','nhan o dau','dia chi','lay the o dau','lay o dau'],'nhan san pham']
];
// ===== Tìm theo từng từ (dự phòng khi chưa khớp cụm nào) =====
const STOP=new Set('the bo la gi co cua va cho toi minh ban nay nao khong duoc mot nhung cac voi nhu hay ve vay nhe nha xin vui long muon biet hoi thi ma se da dang con rat that qua cung nua roi'.split(' '));
const toks=s=>s.split(' ').filter(w=>w.length>=3&&!STOP.has(w));
const KT=K.map(e=>new Set(e[0].flatMap(k=>toks(k.trim()))));
function reply(v){let t=norm(v);
const hs=FS.test(t),ht=FT.test(t);
if(hs!==ht)return{t:hs?SUP:TASK};
const a2=/ a2 /.test(t),b1=/ b1 /.test(t);
if((a2||b1)&&/ (trinh do|cap do|la gi|nghia|cefr|khung|tuong duong|bac|muc|level|nghia la) /.test(t)&&!(a2&&b1&&t.includes('thinkcard'))){return{t:a2&&b1?LA2+'\n\n'+LB1:a2?LA2:LB1}}
if(/ (kiem tra|bai test|danh gia nang luc|bai danh gia|test nang luc|thi thu) /.test(t))return{t:TEST};
const LV=[/ (cap|cap do|muc do|muc|the|card) 1 | nhan biet | listen (and )?answer /,/ (cap|cap do|muc do|muc|the|card) 2 | thong hieu | listen (and )?retell /,/ (cap|cap do|muc do|muc|the|card) 3 | van dung | suy luan | think (and )?reason /];
if(/ 15 the /.test(t)&&!LV.some(r=>r.test(t))){const e=K.find(x=>x[0].includes('dung thu'));return{t:e[1],b:e[2]}}
const BENR=/ (loi ich|cong dung|tac dung|co ich|huu ich|hieu qua|mang lai|ich loi|loi the|giup (gi|duoc gi|ich gi|the nao|nhu the nao|hoc sinh|em|minh|nguoi hoc|ich|hoc)|dung de (hoc|ren)|ho tro (gi|duoc gi|nhu the nao)) /;
if(BENR.test(t)){const li=LV.findIndex(r=>r.test(t));if(li>=0){const e=K.find(x=>x[0].includes('cap '+(li+1)));return{t:e[1],b:e[2]}}}
if(/ (loi ich|cong dung|tac dung|co ich|huu ich|hieu qua|mang lai|ich loi|loi the|giup (gi|duoc gi|ich gi|the nao|nhu the nao|hoc sinh|em|minh|nguoi hoc|ich|hoc)|dung de (hoc|ren)|ho tro (gi|duoc gi|nhu the nao)) /.test(t))return{t:BEN};
for(const [ps,c] of SYN)if(ps.some(p=>t.includes(' '+p+' ')))t+=c+' ';
let best=null,bs=0;for(const e of K){let s=0;for(const k of e[0])if(t.includes(k))s+=k.length;if(s>bs){bs=s;best=e}}
if(best)return{t:best[1],b:best[2]};
const qt=[...new Set(toks(t))];let bi=-1,bc=0;KT.forEach((st,i)=>{const c=qt.filter(w=>st.has(w)).length;if(c>bc){bc=c;bi=i}});
if(bc>=2)return{t:K[bi][1],b:K[bi][2]};
if(t.includes('thinkcard'))return{t:INTRO};return{t:FALL}}
// ===== Âm thanh khi bot gửi tin nhắn (tạo bằng Web Audio, không cần file mp3) =====
let AC=null;
function unlock(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state=='suspended')AC.resume()}catch(e){}}
function ding(){try{unlock();if(!AC)return;const n=AC.currentTime;[[880,0],[1318,.09]].forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,n+d);g.gain.linearRampToValueAtTime(.16,n+d+.015);g.gain.exponentialRampToValueAtTime(.001,n+d+.28);o.connect(g);g.connect(AC.destination);o.start(n+d);o.stop(n+d+.3)})}catch(e){}}
const css=`
.cbw{position:fixed;right:14px;bottom:12px;z-index:45;font-family:'Be Vietnam Pro','Segoe UI',Arial,sans-serif;font-size:16px;line-height:1.45}
.cbf{display:block;border:0;background:none;padding:0;cursor:grab;position:relative;touch-action:none;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
.cbf.dg{cursor:grabbing}
.cbf img{display:block;height:132px;width:auto;pointer-events:none;-webkit-user-drag:none;filter:drop-shadow(0 8px 12px rgba(0,0,0,.45));animation:cbb 2.4s ease-in-out infinite}
.cbf:hover img{filter:drop-shadow(0 8px 14px rgba(0,0,0,.55)) brightness(1.05)}
@keyframes cbb{50%{translate:0 -8px}}
.cbt{position:absolute;right:calc(100% + 4px);top:6px;white-space:nowrap;background:#fff;color:#1f2a44;font-weight:600;padding:8px 14px;border-radius:16px 16px 4px 16px;box-shadow:0 8px 24px rgba(0,0,0,.35);animation:cbi .35s both;pointer-events:none}
.cbt.r{right:auto;left:calc(100% + 4px);border-radius:16px 16px 16px 4px}
@keyframes cbi{from{opacity:0;transform:translateY(8px)}}
.cbx{position:fixed;right:14px;bottom:152px;width:min(360px,calc(100vw - 28px));height:min(520px,calc(100vh - 180px));display:none;flex-direction:column;background:#fff;color:#050505;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.5);overflow:hidden;transform-origin:bottom right;z-index:45}
.cbx.on{display:flex;animation:cbo .25s}
@keyframes cbo{from{opacity:0;transform:scale(.85) translateY(20px)}}
.cbh{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid #e4e6eb;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.cba{flex:none;width:44px;height:44px;border-radius:50%;background:#ffe9d6 url(${IMG}) 33% 4%/210% auto no-repeat;position:relative}
.cbh .cba:after{content:"";position:absolute;right:0;bottom:0;width:12px;height:12px;border-radius:50%;background:#31a24c;border:2px solid #fff}
.cbn{flex:1;min-width:0}.cbn b{display:block;font-size:1.05rem}.cbn span{font-size:1rem;color:#65676b}
.cbc{width:44px;height:44px;border:0;border-radius:50%;background:transparent;color:#0084ff;font-size:1.4rem;cursor:pointer}.cbc:hover{background:#f0f2f5}
.cbb2{flex:1;overflow-y:auto;padding:14px 12px;display:flex;flex-direction:column;gap:6px;background:#fff}
.cbi2{text-align:center;margin:6px 0 12px}.cbi2 .cba{width:76px;height:76px;margin:0 auto 6px}.cbi2 b{display:block;font-size:1.15rem}
.cbm{display:flex;align-items:flex-end;gap:8px;animation:cbi .25s both}.cbm.u{justify-content:flex-end}
.cbm .cba{width:32px;height:32px}
.cbm p{max-width:78%;padding:9px 14px;border-radius:18px;overflow-wrap:anywhere;margin:0;white-space:pre-wrap}
.cbcol{display:flex;flex-direction:column;gap:6px;max-width:78%;align-items:flex-start}.cbcol p{max-width:100%}
.cbl{display:inline-flex;align-items:center;min-height:40px;padding:0 16px;border-radius:99px;background:#0084ff;color:#fff;text-decoration:none;font-weight:600}
.cbm p a.cbk{color:#0066cc;text-decoration:underline;font-weight:600}
.cbm.b p{background:#e4e6eb;color:#050505;border-bottom-left-radius:6px}
.cbm.u p{background:linear-gradient(#0099ff,#0084ff);color:#fff;border-bottom-right-radius:6px}
.cbq{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 0 40px}
.cbq button{min-height:40px;padding:0 14px;border-radius:99px;border:1px solid #0084ff;background:#fff;color:#0084ff;font:inherit;font-weight:600;cursor:pointer}.cbq button:hover{background:#e7f3ff}
.cbd{display:inline-flex;gap:4px;padding:3px 0}.cbd i{width:8px;height:8px;border-radius:50%;background:#8a8d91;animation:cbj 1s infinite}.cbd i:nth-child(2){animation-delay:.15s}.cbd i:nth-child(3){animation-delay:.3s}
@keyframes cbj{40%{translate:0 -5px;background:#444}}
.cbp{display:flex;gap:8px;align-items:center;padding:10px;border-top:1px solid #e4e6eb}
.cbp input{flex:1;min-width:0;min-height:44px;border:0;outline:0;background:#f0f2f5;border-radius:99px;padding:0 16px;font:inherit;font-size:16px;color:#050505}
.cbs{flex:none;width:44px;height:44px;border:0;border-radius:50%;background:transparent;color:#0084ff;cursor:pointer;display:grid;place-items:center}.cbs:hover{background:#f0f2f5}
.cbs svg{width:26px;height:26px;fill:currentColor;stroke:currentColor;stroke-width:1.2;stroke-linejoin:round}
.cbt{transform-origin:100% 65%;animation:cbq .4s cubic-bezier(.3,1.4,.5,1) both}.cbt.r{transform-origin:0 65%}.cbt.ret{animation:cbr .35s ease-in both}
@keyframes cbq{from{opacity:0;transform:scale(.1)}}@keyframes cbr{to{opacity:0;transform:scale(.1)}}
@media(max-width:560px){.cbf img{height:112px}.cbx{left:8px!important;top:auto!important;right:8px!important;bottom:8px!important;width:auto;height:min(78vh,620px)}.cbw.open .cbf{display:none}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const w=document.createElement('div');w.className='cbw';
w.innerHTML=`<div class="cbx" id="cbx" role="dialog" aria-label="Chat với trợ lý ThinkCards"><div class="cbh"><div class="cba"></div><div class="cbn"><b>Trợ lý ThinkCards</b><span>Đang hoạt động</span></div><button class="cbc" id="cbc" aria-label="Đóng chat">✕</button></div><div class="cbb2" id="cbb"><div class="cbi2"><div class="cba"></div><b>Trợ lý ThinkCards</b></div></div><form class="cbp" id="cbp" autocomplete="off"><input id="cbi" type="text" maxlength="500" placeholder="Aa" aria-label="Nhập tin nhắn"><button class="cbs" type="submit" aria-label="Gửi"><svg viewBox="0 0 24 24"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/></svg></button></form></div><button class="cbf" id="cbf" aria-label="Mở chat (kéo để di chuyển)"><img src="${IMG}" alt="Trợ lý ThinkCards"></button>`;
document.body.appendChild(w);
const $=id=>document.getElementById(id),box=$('cbx'),body=$('cbb'),inp=$('cbi'),fab=$('cbf');
const mob=()=>innerWidth<=560;
function place(){if(mob()){['left','top','right','bottom'].forEach(p=>box.style.removeProperty(p));return}
const r=w.getBoundingClientRect(),W=Math.min(360,innerWidth-28),H=Math.min(520,innerHeight-180);
let top,left;
if(r.top-H-10>=8){top=r.top-H-10;left=Math.min(Math.max(8,r.right-W),innerWidth-W-8)}
else if(r.bottom+10+H<=innerHeight-8){top=r.bottom+10;left=Math.min(Math.max(8,r.right-W),innerWidth-W-8)}
else{top=Math.min(Math.max(8,r.bottom-H),innerHeight-H-8);left=r.left-W-10>=8?r.left-W-10:Math.min(r.right+10,innerWidth-W-8)}
Object.assign(box.style,{left:left+'px',top:top+'px',right:'auto',bottom:'auto'})}
function open(b){box.classList.toggle('on',b);w.classList.toggle('open',b);hideTip();if(b){place();if(matchMedia('(hover:hover)').matches)inp.focus()}}
// kéo thả nhân vật
let drag=null,moved=false;
function clamp(){const r=w.getBoundingClientRect();if(!w.style.left)return;const x=Math.min(Math.max(0,r.left),innerWidth-r.width),y=Math.min(Math.max(0,r.top),innerHeight-r.height);w.style.left=x+'px';w.style.top=y+'px'}
function setPos(x,y){w.style.right='auto';w.style.bottom='auto';w.style.left=x+'px';w.style.top=y+'px';clamp()}
try{const p=JSON.parse(localStorage.getItem('cb_pos')||'null');if(p)setPos(p.x,p.y)}catch(e){}
fab.addEventListener('pointerdown',e=>{const r=w.getBoundingClientRect();drag={x:e.clientX,y:e.clientY,l:r.left,t:r.top};moved=false;fab.setPointerCapture(e.pointerId)});
fab.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!moved&&Math.hypot(dx,dy)<6)return;moved=true;fab.classList.add('dg');hideTip();setPos(drag.l+dx,drag.t+dy);if(box.classList.contains('on'))place()});
fab.addEventListener('pointerup',()=>{if(!drag)return;drag=null;fab.classList.remove('dg');if(moved){try{const r=w.getBoundingClientRect();localStorage.setItem('cb_pos',JSON.stringify({x:r.left,y:r.top}))}catch(e){}}});
fab.addEventListener('pointercancel',()=>{drag=null;fab.classList.remove('dg')});
fab.onclick=()=>{if(moved){moved=false;return}open(!box.classList.contains('on'))};
$('cbc').onclick=()=>open(false);
addEventListener('keydown',e=>{if(e.key=='Escape'&&box.classList.contains('on'))open(false)});
addEventListener('resize',()=>{clamp();if(box.classList.contains('on'))place()});
// bong bóng giới thiệu mỗi 10 giây
let tip=null,tt=0,greeted=false;
function hideTip(){clearTimeout(tt);if(tip){tip.remove();tip=null}}
function retract(cb){clearTimeout(tt);if(!tip){if(cb)cb();return}const t=tip;t.classList.add('ret');setTimeout(()=>{if(tip===t){t.remove();tip=null}if(cb)cb()},360)}
function showTip(text,ms,cb){if(box.classList.contains('on')||drag||tip)return false;tip=document.createElement('span');tip.className='cbt';tip.textContent=text||TIP;if(w.getBoundingClientRect().left<200)tip.classList.add('r');fab.appendChild(tip);tt=setTimeout(()=>retract(cb),ms||3500);return true}
setTimeout(()=>{showTip();setInterval(()=>showTip(),10000)},3000);
function hello(){if(greeted||!NAME)return;if(!showTip('Chào '+NAME+' 👋',3000,()=>setTimeout(()=>showTip(pz('Tôi có thể giúp gì cho bạn'),3500),350))){setTimeout(hello,1000);return}greeted=true}
addEventListener('tcname',()=>setTimeout(hello,900));
if(!document.getElementById('intro')&&NAME)setTimeout(hello,1500);
// tin nhắn
function lk(p,txt){const re=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let i=0,m;while((m=re.exec(txt))){if(m.index>i)p.appendChild(document.createTextNode(txt.slice(i,m.index)));const a=document.createElement('a');a.href=m[2];a.textContent=m[1];a.target='_blank';a.rel='noopener noreferrer';a.className='cbk';p.appendChild(a);i=re.lastIndex}if(i<txt.length)p.appendChild(document.createTextNode(txt.slice(i)))}
function add(cls,txt,o){const m=document.createElement('div');m.className='cbm '+cls;if(cls=='b'){const a=document.createElement('div');a.className='cba';m.appendChild(a)}const p=document.createElement('p');if(o&&o.typing)p.innerHTML='<span class="cbd"><i></i><i></i><i></i></span>';else if(cls=='b')lk(p,pz(txt));else p.textContent=txt;if(o&&o.btn){const c=document.createElement('div');c.className='cbcol';const a=document.createElement('a');a.className='cbl';a.textContent=o.btn[0];a.href=o.btn[1];c.append(p,a);m.appendChild(c)}else m.appendChild(p);body.appendChild(m);body.scrollTop=body.scrollHeight;return m}
const gm=add('b',GREET);
addEventListener('tcname',e=>{NAME=e.detail||'';const g=gm.querySelector('p');if(g)g.textContent=pz(GREET)});
const q=document.createElement('div');q.className='cbq';
['ThinkCards là gì?','3 cấp độ','Cách dùng trên lớp','Giá bộ thẻ'].forEach(t=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.onclick=()=>send(t);q.appendChild(b)});body.appendChild(q);
function send(v){v=v.trim();if(!v)return;unlock();q.remove();inp.value='';add('u',v);const t=add('b','',{typing:1});setTimeout(()=>{t.remove();const r=reply(v);add('b',r.t,{btn:r.b});ding()},800)}
$('cbp').onsubmit=e=>{e.preventDefault();send(inp.value)};
})();
