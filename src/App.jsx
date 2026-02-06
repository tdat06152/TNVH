import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Package,
  Truck,
  Clock,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Bike,
  ScanBarcode,
  Smartphone
} from 'lucide-react'

const positions = [
  {
    id: 1,
    title: "Nhân viên Phát triển thị trường (NVPTTT)",
    description: "Cầu nối giữa GHN và khách hàng, thúc đẩy doanh số tại khu vực.",
    bullets: [
      "Hiểu quy trình làm việc thực tế của NVPTTT tại bưu cục",
      "Trải nghiệm giao hàng, xử lý POD, COD và bàn giao hàng hóa",
      "Nắm được cách vận hành đơn hàng từ góc nhìn thị trường",
      "Hiểu rõ vai trò NVPTTT trong chuỗi vận hành và chăm sóc khách hàng"
    ],
    videoPath: "",
    images: ["/NVPTTT ngang.png", "/NVPTTT dọc.png", "/NVPTTT dọc (1).png"],
    icon: <Bike className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 2,
    title: "Nhân viên Xử lý (NVXL)",
    description: "Nhân sự then chốt đảm bảo hàng hóa được xử lý chính xác tại bưu cục.",
    bullets: [
      "Hiểu quy trình xử lý hàng giao, hàng lấy và hàng trả",
      "Nắm được giờ xuất – nhập hàng và quy trình nhận tải, lên tải",
      "Biết cách xử lý các tình huống hàng hóa gặp vấn đề",
      "Trải nghiệm nhịp độ vận hành thực tế tại bưu cục"
    ],
    videoPath: "",
    images: ["/NVXL ngang.png", "/NVXL dọc.png", "/NVXL dọc (1).png"],
    icon: <ScanBarcode className="w-8 h-8" />,
    color: "from-red-500 to-red-600"
  },
  {
    id: 3,
    title: "Nhân viên Phân hàng (Trung tâm Trung chuyển - TTTC)",
    description: "Đóng vai trò trung tâm trong luồng di chuyển hàng hóa toàn hệ thống.",
    bullets: [
      "Hiểu tổng quan vận hành và các luồng hàng tại TTTC",
      "Nắm được giờ xuất – nhập và cut-off time của kho",
      "Hiểu năng suất xử lý hàng nhỏ và hàng nặng",
      "Trải nghiệm hành trình đơn hàng tại TTTC như một Freelancer"
    ],
    videoPath: "",
    images: ["/NVPH ngang.png", "/NVPH dọc.png", "/NVPH dọc (1).png"],
    icon: <Package className="w-8 h-8" />,
    color: "from-blue-600 to-blue-700"
  },
  {
    id: 4,
    title: "Nhân viên Giao Xe Tải (NV GXT)",
    description: "Đảm bảo vận chuyển hàng số lượng lớn đúng thời gian và lộ trình.",
    bullets: [
      "Hiểu quy trình làm việc một ngày của NV GXT",
      "Nắm cách kiểm tra chuyến đi và đơn hàng được phân công",
      "Thực hiện chụp POD cho các trạng thái giao hàng",
      "Hiểu quy trình COD và bàn giao hàng hóa sau chuyến đi"
    ],
    videoPath: "",
    images: ["/NV GXT ngang.png", "/NV GXT dọc.png", "/NV GXT dọc (1).png"],
    icon: <Truck className="w-8 h-8" />,
    color: "from-orange-600 to-orange-700"
  },
  {
    id: 5,
    title: "Tài xế Ahamove",
    description: "Lực lượng giao nhận linh hoạt trong mô hình logistics công nghệ.",
    bullets: [
      "Hiểu quy trình đăng ký và onboarding tài xế Ahamove",
      "Trải nghiệm nhận – giao đơn hàng qua ứng dụng tài xế",
      "Nắm rõ các bước hoàn tất một đơn giao hàng",
      "Hiểu cách vận hành thực tế của mô hình giao hàng công nghệ"
    ],
    videoPath: "",
    images: ["/Ahamove ngang.png", "/Ahamove dọc.png", "/Ahamove dọc (1).png"],
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-emerald-600 to-emerald-700"
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

function App() {
  const [activeTab, setActiveTab] = useState(positions[0].id)

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white font-sans text-ghn-dark overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo3.png" alt="GHN Logo" className="h-16 w-auto object-contain" />
          </div>
          <button
            onClick={scrollToForm}
            className="bg-ghn-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-orange-200"
          >
            Đăng ký tham gia
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-orange-100 text-ghn-orange font-bold text-sm mb-8 tracking-wider uppercase">
            TRẢI NGHIỆM VẬN HÀNH
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] flex flex-col gap-2">
            <span className="block">Trải nghiệm vị trí</span>
            <span className="text-ghn-orange italic whitespace-nowrap px-2">
              vận hành trực tiếp
            </span>
            <span className="block">tại GHN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Trải nghiệm thật – Công việc thật – Áp lực thật.<br />
            Sâu sát thực tế, đồng hành cùng đội ngũ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="group bg-ghn-dark hover:bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all"
            >
              Đăng ký trải nghiệm ngay
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#program-info"
              className="text-ghn-dark hover:text-ghn-orange font-bold flex items-center gap-2 px-8 py-4 transition-colors"
            >
              Tìm hiểu thêm
              <ChevronDown className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="program-info" className="py-24 px-4 bg-ghn-gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-8 text-black">Trải nghiệm vận hành là gì?</h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed font-normal">
                Là quá trình trực tiếp tham gia làm việc tại các vị trí vận hành của GHN, nhằm hiểu sâu hơn hoạt động vận hành thực tế và tăng cường sự đồng hành, hỗ trợ cùng đội ngũ vận hành.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md grow-0 shrink-0">
                    <Users className="text-ghn-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-black">Đối tượng</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Nhân viên mới tại GHN đang trong lộ trình 2 tháng thử việc</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md grow-0 shrink-0">
                    <Clock className="text-ghn-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-black">Thời lượng</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">05 ngày trải nghiệm trực tiếp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden p-10 border border-white">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="bg-orange-50 rounded-3xl flex flex-col justify-end p-8 border border-orange-100 font-bold">
                    <span className="text-5xl font-black text-ghn-orange italic mb-2">05</span>
                    <span className="font-bold text-lg text-black">Ngày trải nghiệm</span>
                  </div>
                  <div className="bg-ghn-orange rounded-3xl flex flex-col justify-end p-8 text-white text-right shadow-lg font-bold">
                    <span className="text-5xl font-black italic mb-2">05</span>
                    <span className="font-bold text-lg">Vị trí thực tế</span>
                  </div>
                  <div className="bg-ghn-dark rounded-3xl flex flex-col justify-end p-8 text-white col-span-2 shadow-xl font-bold">
                    <span className="text-3xl font-bold mb-3">Hiểu sâu - Đồng hành</span>
                    <span className="opacity-70 text-lg">Trực tiếp tham gia, thấu hiểu áp lực và tối ưu hóa vận hành cùng đồng đội.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* General Video Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider text-ghn-orange">Video Giới thiệu quá trình trải nghiệm</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-ghn-dark rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group relative">
          <video
            src="/general_video.mp4"
            controls
            className="w-full h-auto max-h-[70vh] block mx-auto"
          />
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 italic uppercase">5 Vị trí Vận hành thực tế</h2>
          <p className="text-xl text-gray-500 font-medium tracking-tight">Trực tiếp tham gia - Hiểu sâu giá trị</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {positions.map((pos) => (
            <button
              key={pos.id}
              onClick={() => setActiveTab(pos.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all border-2 ${activeTab === pos.id
                ? 'bg-ghn-dark text-white border-ghn-dark shadow-xl scale-105'
                : 'bg-white text-gray-500 border-gray-100 hover:border-orange-200 hover:text-ghn-orange'
                }`}
            >
              {pos.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[40px] p-8 lg:p-16 shadow-2xl border border-gray-50"
        >
          <div className="order-2 lg:order-1">
            <div className={`w-20 h-20 bg-gradient-to-br ${positions.find(p => p.id === activeTab).color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl`}>
              {positions.find(p => p.id === activeTab).icon}
            </div>
            <h3 className="text-4xl font-black mb-8 leading-tight">{positions.find(p => p.id === activeTab).title}</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {positions.find(p => p.id === activeTab).description}
            </p>
            <div className="space-y-5">
              {positions.find(p => p.id === activeTab).bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-ghn-orange" size={16} />
                  </div>
                  <span className="font-bold text-gray-700 text-lg tracking-tight">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 aspect-[16/9] bg-gray-100 rounded-[40px] overflow-hidden border-4 border-white shadow-xl relative group">
                {positions.find(p => p.id === activeTab).images[0] ? (
                  <img src={positions.find(p => p.id === activeTab).images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hình ảnh thực tế 1" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-bold italic tracking-widest uppercase text-sm">
                    <Package className="mb-4 opacity-20" size={48} />
                    Hình ảnh thực tế 01
                  </div>
                )}
              </div>
              <div className="aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden border-4 border-white shadow-lg relative">
                {positions.find(p => p.id === activeTab).images[1] ? (
                  <img src={positions.find(p => p.id === activeTab).images[1]} className="w-full h-full object-cover" alt="Hình ảnh thực tế 2" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold italic text-xs uppercase tracking-tighter">Ảnh thực tế 02</div>
                )}
              </div>
              <div className="aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden border-4 border-white shadow-lg relative">
                {positions.find(p => p.id === activeTab).images[2] ? (
                  <img src={positions.find(p => p.id === activeTab).images[2]} className="w-full h-full object-cover" alt="Hình ảnh thực tế 3" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold italic text-xs uppercase tracking-tighter">Ảnh thực tế 03</div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Registration Section */}
      <section id="registration-form" className="py-24 px-4 bg-ghn-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ghn-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ghn-orange/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Sẵn sàng để bắt đầu?</h2>
          <p className="text-xl text-gray-400 mb-12">Đăng ký ngay để nhận lịch trải nghiệm sớm nhất</p>

          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl text-left">
            <div className="mb-10 text-center">
              <p className="text-gray-600 font-medium mb-4 italic">Vui lòng hoàn thành thông tin qua Google Form bên dưới:</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScVn2YuykoOc_cfHuct7U8bpLgO9hqro641xSCRjQ-ok5geuQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghn-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-orange-900/20"
              >
                Mở Form Đăng Ký
                <ExternalLink size={24} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 border-t pt-10">
              <div>
                <h4 className="font-bold text-lg mb-4 text-ghn-dark">Lưu ý chuẩn bị:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2"><span>•</span> Đồng phục GHN, quần dài tối màu, giày bít mũi chân</li>
                  <li className="flex gap-2"><span>•</span> Nữ thì búi tóc gọn gàng</li>
                  <li className="flex gap-2"><span>•</span> Không mang trang sức và điện thoại trong quá trình làm việc tại Trung tâm trung chuyển.</li>
                </ul>
              </div>
              <div className="bg-ghn-gray rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-ghn-dark">Lịch trình dự kiến:</h4>
                <p className="text-gray-600 leading-relaxed italic">
                  "Sau khi đăng ký, hệ thống sẽ tự động nhắc lịch cho bạn qua Email 1 ngày trước thời gian bắt đầu. Hãy kiểm tra hộp thư thường xuyên nhé!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 bg-white text-center text-gray-500 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex items-center">
            <img src="/logo3.png" alt="GHN Footer" className="h-16 opacity-90 object-contain" />
          </div>
          <div className="space-y-2">
            <p className="text-ghn-dark font-black text-xl uppercase tracking-tighter italic">Giao Hàng Nhanh - Trải Nghiệm Vận Hành</p>
            <p className="max-w-xl text-lg font-medium">Bản quyền thuộc về Bộ phận Học tập và Phát triển GHN. <br />"Thấu hiểu vận hành - Đồng lòng bứt phá."</p>
          </div>
          <div className="mt-8 py-2 px-6 rounded-xl bg-gray-50 border border-gray-100 inline-block">
            <p className="text-sm font-semibold text-gray-400 italic">Sản phẩm được thực hiện bởi ĐạtTT LnD</p>
          </div>
          <div className="h-4" />
        </div>
      </footer>
    </div>
  )
}

export default App
