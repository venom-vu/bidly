<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Giải pháp Bidly theo ngành: EPC, MEP, Kết cấu thép | Preconstruction CRM',
  description: 'Giải pháp quản trị đấu thầu chuyên biệt cho tổng thầu EPC công nghiệp, nhà thầu MEP/PCCC và kết cấu thép tại Việt Nam. 3 mẫu nghiệp vụ chuẩn hóa và mô hình triển khai on-premise.'
})

const segments = [
  {
    id: 'epc',
    badge: 'PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #1',
    title: 'Tổng thầu EPC & Xây dựng Công nghiệp',
    subtitle: 'Quy mô 50 - 500 nhân sự · Hợp đồng giá trị lớn · Nhiều phòng ban tham gia',
    description: 'Tổng thầu EPC công nghiệp quản lý hàng chục dự án KCN/FDI, điều phối nhịp nhàng 5 phòng ban và bảo vệ tri thức quan hệ khi nhân sự biến động.',
    problems: [
      'Dữ liệu cơ hội bị phân mảnh giữa nhiều phòng ban: không ai có bức tranh toàn cảnh về tiến độ và rủi ro.',
      'Quyết định Go/No-Go theo cảm tính hoặc áp lực doanh số: dẫn tới dàn trải nguồn lực vào các dự án rủi ro cao.',
      'Hồ sơ dự thầu gửi nhầm phiên bản do phối hợp qua Zalo/email không có cơ chế khóa máy chủ.'
    ],
    solutions: [
      'Pipeline 9 giai đoạn chuẩn hóa với Scorecard Go/No-Go định lượng 6 tiêu chí có trọng số 0-100.',
      'Tender Workspace phân rã checklist 5 phòng ban với trạng thái cập nhật thời gian thực.',
      'Capability Library tập trung: kho dự án tiêu biểu, hồ sơ chuyên gia, chứng chỉ không thất lạc khi nhân sự nghỉ việc.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    id: 'mep',
    badge: 'PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #2',
    title: 'Nhà thầu Cơ điện MEP, PCCC & Xử lý nước',
    subtitle: 'Quy mô 20 - 150 nhân sự · Theo đuổi nhiều gói thầu song song · Phụ thuộc quan hệ',
    description: 'Nhà thầu MEP theo đuổi hàng chục gói thầu song song, phụ thuộc mạng lưới quan hệ CĐT/Tổng thầu. Chu kỳ ngắn và số lượng nhiều đòi hỏi kiểm soát hạn chót nghiêm ngặt.',
    problems: [
      'Theo dõi nhiều gói thầu song song với các hạn nộp khác nhau: dễ bỏ sót đầu mục và xung đột nguồn lực.',
      'Mạng lưới quan hệ nằm trong danh bạ cá nhân: mỗi lần thầu phải hỏi lại ai là người có quyền quyết định.',
      'Hồ sơ năng lực và chứng chỉ kỹ thuật cần cập nhật liên tục nhưng không có cảnh báo hết hạn.'
    ],
    solutions: [
      'Dashboard Deadline Heatmap: nhìn ngay các gói thầu sắp đến hạn trong 7-14-30 ngày.',
      'Bản đồ Stakeholder Map theo ngữ cảnh dự án: ai là Decision Maker, Influencer, Champion cho từng gói thầu.',
      'Thư viện Capability Library tự động cảnh báo chứng chỉ sắp hết hạn và lọc nhanh theo chủng loại gói thầu.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80'
  },
  {
    id: 'steel',
    badge: 'PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #3',
    title: 'Kết cấu thép & Nhà thép tiền chế',
    subtitle: 'Quy mô 30 - 200 nhân sự · Báo giá cạnh tranh · Quản lý RFQ vật tư',
    description: 'Nhà thầu kết cấu thép cạnh tranh giá cao và biến động vật liệu lớn. Thư viện dự án thép tiêu biểu (tonnage, khẩu độ) là yếu tố quyết định niềm tin với CĐT FDI.',
    problems: [
      'Hồ sơ năng lực dự án thép tiêu biểu khó tổng hợp: thiếu thông số kỹ thuật chuẩn (tonnage, span) và ảnh chất lượng.',
      'Phối hợp thiết kế - kỹ thuật - thương mại trong giai đoạn chào giá thiếu hệ thống tập trung.',
      'Lịch sử báo giá và bài học thắng/thua không được ghi lại bài bản để tối ưu chiến lược giá.'
    ],
    solutions: [
      'Thư viện dự án thép chuẩn hóa: lưu trữ thông số tonnage, diện tích, khẩu độ, hình ảnh và hồ sơ nghiệm thu.',
      'Tender Workspace phối hợp thiết kế - thương mại chặt chẽ: quản lý mốc thời gian và tài liệu chào thầu.',
      'Phân tích Win/Loss chi tiết theo loại công trình, khu vực và đối thủ cạnh tranh để đúc rút bài học.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80'
  }
]

const deploymentModels = [
  {
    name: 'Design Partner Pilot',
    target: 'Dành cho doanh nghiệp muốn kiểm chứng adoption',
    desc: 'Triển khai có hỗ trợ đầy đủ 8-10 tuần trên dữ liệu thật. Chi phí khấu trừ 100% khi ký hợp đồng năm.',
    ctaUrl: '/crm/pricing#pilot'
  },
  {
    name: 'Private Cloud Managed',
    target: 'Khuyến nghị cho Tổng thầu vừa & lớn',
    desc: 'Database PostgreSQL riêng biệt, backup độc lập, Vtechcom vận hành và cam kết SLA 99.9%.',
    ctaUrl: '/crm/pricing#professional'
  },
  {
    name: 'Enterprise On-premise',
    target: 'Dành cho tập đoàn có chính sách IT nghiêm ngặt',
    desc: 'Cài đặt trực tiếp trên máy chủ nội bộ hoặc Customer Cloud, tích hợp SSO doanh nghiệp, tùy biến sâu.',
    ctaUrl: '/crm/pricing#enterprise'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            GIẢI PHÁP CHUYÊN BIỆT THEO PHÂN KHÚC
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Bidly Cho Từng Phân Khúc Tổng Thầu Xây Dựng
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Mỗi phân khúc có quy trình đặc thù. Bidly xây dựng 3 mẫu nghiệp vụ chuẩn (EPC, MEP, Thép) giúp triển khai nhanh và hiệu quả tức thì.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="#demo">
            Đặt lịch Demo theo ngành của bạn
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/features">
            Xem 7 Mô-đun Lõi
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Segments Details Section -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-24">
        <div
          v-for="(seg, sIdx) in segments"
          :key="seg.id"
          :id="seg.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <!-- Left Column -->
          <div :class="['lg:col-span-6 space-y-6', sIdx % 2 === 1 ? 'lg:order-2' : '']">
            <div>
              <div class="text-xs font-bold text-primary uppercase tracking-widest mb-2">{{ seg.badge }}</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground">{{ seg.title }}</h2>
              <div class="text-xs font-semibold text-muted-foreground mt-1 tabular">{{ seg.subtitle }}</div>
            </div>
            <p class="text-muted-foreground leading-relaxed text-sm sm:text-base font-normal">{{ seg.description }}</p>

            <!-- Problems -->
            <div class="space-y-2.5">
              <div class="text-xs font-bold uppercase tracking-wider text-destructive">Bài toán thách thức:</div>
              <ul class="space-y-2">
                <li
                  v-for="problem in seg.problems"
                  :key="problem"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                >
                  <svg class="w-4 h-4 text-destructive shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ problem }}</span>
                </li>
              </ul>
            </div>

            <!-- Solutions -->
            <div class="space-y-2.5 pt-2">
              <div class="text-xs font-bold uppercase tracking-wider text-primary">Giải pháp với Bidly:</div>
              <ul class="space-y-2">
                <li
                  v-for="sol in seg.solutions"
                  :key="sol"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-medium"
                >
                  <svg class="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ sol }}</span>
                </li>
              </ul>
            </div>

            <div class="pt-4">
              <SfButton variant="primary" size="md" to="#demo">
                Đăng ký Demo chuyên biệt
              </SfButton>
            </div>
          </div>

          <!-- Right Image Column -->
          <div :class="['lg:col-span-6', sIdx % 2 === 1 ? 'lg:order-1' : '']">
            <div class="rounded-2xl overflow-hidden shadow-card aspect-[4/3] bg-background border-0">
              <img
                :src="seg.imageUrl"
                :alt="seg.title"
                class="w-full h-full object-cover"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Models Selection -->
    <section class="py-16 md:py-24 bg-secondary/40 border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">HẠ TẦNG &amp; TRIỂN KHAI</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Lựa Chọn Mô Hình Triển Khai Linh Hoạt
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Từ thí điểm nhanh đến cài đặt trên máy chủ riêng của doanh nghiệp với độ bảo mật tuyệt đối.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(mod, mIdx) in deploymentModels"
            :key="mIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-4 flex flex-col justify-between border-0"
          >
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-foreground">{{ mod.name }}</h3>
              <div class="text-xs font-semibold text-primary">{{ mod.target }}</div>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">{{ mod.desc }}</p>
            </div>
            <div class="pt-2">
              <SfButton variant="secondary" size="sm" :to="mod.ctaUrl" block>
                Xem chi tiết &amp; Báo giá
              </SfButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
