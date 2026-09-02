import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ArrowUpRight, Plus, Layers } from 'lucide-react';
import AdditionalExperienceModal from './AdditionalExperienceModal';

const additionalExperiences = [
  {
    id: 1,
    title: 'Junior Software Developer',
    subtitle: 'Generation Thailand',
    role: 'Full-Stack Software Engineering Bootcamp',
    period: '2024',
    description: 'หลักสูตรเข้มข้น 14 สัปดาห์ พัฒนา Full-Stack Web App ด้วย React, Node.js, Express และ PostgreSQL พร้อมฝึกการทำงานแบบ Agile/Scrum',
    fullDescription: 'เข้าร่วมหลักสูตร Junior Software Developer จาก Generation Thailand อย่างเข้มข้นเป็นเวลา 14 สัปดาห์ ได้พัฒนา Full-Stack Web Application ด้วย React, Node.js, Express และ PostgreSQL พร้อมฝึกการทำงานแบบ Agile/Scrum, Git Collaboration และการส่งมอบโปรเจกต์ระดับมืออาชีพ',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tag: 'BOOTCAMP',
    skills: ['React.js', 'Node.js', 'PostgreSQL', 'Agile / Scrum', 'RESTful APIs'],
  },
  {
    id: 2,
    title: 'JSD Cohort Leader',
    subtitle: 'Generation Thailand',
    role: 'Cohort Leader & Team Coordinator',
    period: '2024',
    description: 'ทำหน้าที่ผู้นำรุ่น ประสานงานกิจกรรมระหว่างผู้เรียนและทีมงาน พร้อมจัด Workshop เสริมทักษะและสนับสนุนเพื่อนร่วมรุ่น',
    fullDescription: 'ได้รับเลือกเป็น Cohort Leader ประจำรุ่น ทำหน้าที่ประสานงานกิจกรรมระหว่างผู้เรียนและทีมงาน จัด Peer-to-Peer Study Group จัด Workshop เสริมทักษะการเขียนโปรแกรม และสนับสนุนเพื่อนร่วมรุ่นให้บรรลุเป้าหมายการเรียนรู้ร่วมกัน',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tag: 'LEADERSHIP',
    skills: ['Team Leadership', 'Mentoring', 'Public Speaking', 'Cross-functional Collaboration'],
  },
  {
    id: 3,
    title: 'AU Music Club Committee',
    subtitle: 'Assumption University',
    role: 'Event & Activities Committee',
    period: '2022 - 2023',
    description: 'กรรมการชมรมดนตรี วางแผนและจัดคอนเสิร์ตและกิจกรรมส่งเสริมความสามารถทางดนตรีของนักศึกษาในมหาวิทยาลัย',
    fullDescription: 'กรรมการชมรมดนตรี มหาวิทยาลัยอัสสัมชัญ วางแผน ประสานงาน และจัดคอนเสิร์ต กิจกรรมดนตรีทั้งภายในและภายนอกมหาวิทยาลัย บริหารจัดการงบประมาณและทีมงานฝ่ายต่างๆ ได้อย่างมีประสิทธิภาพ',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    tag: 'COMMITTEE',
    skills: ['Event Planning', 'Budget Management', 'Team Coordination', 'Stage Production'],
  },
  {
    id: 4,
    title: 'AU Scholarship Recipient',
    subtitle: 'Assumption University',
    role: 'Full Academic Scholarship',
    period: '2021 - 2025',
    description: 'ได้รับทุนการศึกษา 100% จากทางมหาวิทยาลัยด้วยผลการเรียนและผลงานกิจกรรมดีเด่นอย่างต่อเนื่อง',
    fullDescription: 'ได้รับทุนการศึกษา 100% จากทางมหาวิทยาลัยอัสสัมชัญ จากผลการเรียนดีเด่นและการเข้าร่วมกิจกรรมส่งเสริมมหาวิทยาลัยอย่างต่อเนื่องตลอดหลักสูตร',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    tag: 'SCHOLARSHIP',
    skills: ['Academic Excellence', 'Dedication', 'Student Ambassador'],
  },
  {
    id: 5,
    title: 'UX/UI Design Sprint',
    subtitle: 'Generation Thailand',
    role: 'Product Designer & Prototyper',
    period: '2024',
    description: 'ร่วมทีมออกแบบ Design Sprint 5 วัน สร้าง High-Fidelity Prototype สำหรับ HealthTech Web Application ใน Figma',
    fullDescription: 'ร่วมทีมออกแบบในกระบวนการ Design Sprint 5 วัน สัมภาษณ์ผู้ใช้งาน สร้าง User Journey, Wireframes และ Interactive Prototype สำหรับ HealthTech Web Application ใน Figma พร้อมทำการทดสอบ Usability กับกลุ่มผู้ใช้จริง',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    tag: 'PROJECT',
    skills: ['Figma', 'Design Sprint', 'User Research', 'Usability Testing'],
  },
  {
    id: 6,
    title: 'Open Source Contribution',
    subtitle: 'Hacktoberfest & Developer Community',
    role: 'Open Source Contributor',
    period: '2024',
    description: 'Contribute ให้ Open Source Projects ในคอมมูนิตี้ ทั้ง React Component, เอกสาร Developer Guides และ Bug Fixes',
    fullDescription: 'เข้าร่วมกิจกรรม Hacktoberfest และส่งมอบ Pull Requests ให้กับโอเพนซอร์สโปรเจกต์ต่างๆ ทั้ง React Components, การปรับปรุงเอกสาร และแก้ไขบั๊กในคลังโค้ดโอเพนซอร์ส',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
    tag: 'OPEN SOURCE',
    skills: ['Git / GitHub', 'Code Review', 'Open Source', 'Documentation'],
  },
];

const AdditionalExperience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState(null);

  // Show only 2 featured cards + 1 "Others" card in a single row (3 columns)
  const featuredActivities = additionalExperiences.slice(0, 2);
  const remainingCount = additionalExperiences.length - 2;

  const handleOpenModal = (id) => {
    setSelectedActivityId(id);
    setModalOpen(true);
  };

  const handleOpenOthers = () => {
    setSelectedActivityId(additionalExperiences[2]?.id || additionalExperiences[0]?.id);
    setModalOpen(true);
  };

  return (
    <section
      id="additional-experience"
      className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">
              highlights & activities
            </span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
                ADDITIONAL
              </h2>
              <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight -mt-2">
                EXPERIENCE
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase tracking-wider rounded-full shadow-sm">
                ✦ {additionalExperiences.length} ACTIVITIES & HIGHLIGHTS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Single Row Grid (3 Cards): 2 Featured + 1 "Others" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 & 2: Featured Activities */}
          {featuredActivities.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenModal(exp.id)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl editorial-border shadow-xl bg-zinc-900 flex flex-col justify-end"
              style={{ aspectRatio: '4/5', minHeight: '380px' }}
            >
              {/* Background Image */}
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-300" />

              {/* Top Tag Badge */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="inline-block px-3.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded-full bg-white text-black dark:bg-black dark:text-white border border-black/10 dark:border-white/20 shadow-md">
                  {exp.tag}
                </span>
                <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Info Content */}
              <div className="relative z-10 p-6 text-white">
                <p className="font-mono text-[10px] text-zinc-300 tracking-wider uppercase mb-1">
                  {exp.subtitle} • {exp.period}
                </p>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase leading-tight mb-2 group-hover:text-pink-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-3">
                  {exp.description}
                </p>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-pink-400 group-hover:text-white transition-colors">
                  คลิกเพื่อดูรายละเอียด ↗
                </span>
              </div>
            </motion.div>
          ))}

          {/* Card 3: "OTHERS" / กิจกรรมอื่นๆ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={handleOpenOthers}
            className="relative group cursor-pointer overflow-hidden rounded-3xl editorial-border shadow-xl bg-zinc-950 flex flex-col justify-between p-6 sm:p-8"
            style={{ aspectRatio: '4/5', minHeight: '380px' }}
          >
            {/* Background collage image with high-contrast overlay */}
            <img
              src={additionalExperiences[2]?.image || 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80'}
              alt="Other Activities"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />

            {/* Top Bar inside Card 3 */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded-full bg-pink-500 text-white shadow-md">
                +{remainingCount} MORE ACTIVITIES
              </span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="relative z-10 my-auto py-4">
              <span className="font-mono text-[10px] text-pink-400 uppercase tracking-widest block mb-1">
                ✦ EXPLORE ALL HIGHLIGHTS ✦
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase leading-tight mb-2 group-hover:text-pink-400 transition-colors">
                OTHERS / กิจกรรมอื่นๆ
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                AU Music Club, ทุนการศึกษา AU Scholarship 100%, UX/UI Design Sprint และ Open Source Contributions
              </p>
            </div>

            {/* Bottom Button Action */}
            <div className="relative z-10 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-white group-hover:text-pink-400 transition-colors">
                <span className="font-sans font-black text-xs uppercase tracking-wider">
                  ดูรายละเอียดกิจกรรมทั้งหมด ({additionalExperiences.length})
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom decorative strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="flex-1 h-[2px] bg-black/15 dark:bg-white/10" />
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <Camera className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Moments & Milestones
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 h-[2px] bg-black/15 dark:bg-white/10" />
        </motion.div>
      </div>

      {/* Pop-up Modal */}
      <AdditionalExperienceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        activities={additionalExperiences}
        initialActivityId={selectedActivityId}
      />
    </section>
  );
};

export default AdditionalExperience;
