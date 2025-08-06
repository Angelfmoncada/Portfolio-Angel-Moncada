import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, Download, Eye, FileText, X, Code2, MessageSquare } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
// Removed EmailJS dependency - using native mailto solution

// Update contact methods to Angel's email and social profiles
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'angelfmoncada.m@gmail.com',
    href: 'mailto:angelfmoncada.m@gmail.com',
    bg: 'bg-blue-700',
    iconColor: 'text-white',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Angelfmoncada',
    href: 'https://github.com/Angelfmoncada',
    bg: 'bg-gray-700',
    iconColor: 'text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ángel-moncada-a689882aa',
    href: 'https://www.linkedin.com/in/ángel-moncada-a689882aa',
    bg: 'bg-blue-800',
    iconColor: 'text-white',
  },
];

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 36.5L14 25.5L35.5 14.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 25.5H35.5" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// HackerRank SVG
const HackerRankIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#2EC866"/>
    <path d="M25 15V35" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <path d="M18 25H32" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
// Stack Overflow SVG
const StackOverflowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#F48024"/>
    <path d="M18 35V30H32V35" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 28L30 32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 24L32 28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 20L34 24" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const codingPlatforms = [
  {
    icon: LeetCodeIcon,
    label: 'LeetCode',
    href: 'https://leetcode.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: HackerRankIcon,
    label: 'HackerRank',
    href: 'https://hackerrank.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: StackOverflowIcon,
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com',
    bg: 'bg-white',
    iconColor: '',
  },
];

const ProfessionalSummary = () => (
  <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-white">Professional Summary</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Update professional summary to describe Ángel Moncada */}
      <p className="text-gray-300 text-base mb-8">
        I'm a full‑stack developer and Systems Engineering student with a passion for clean, efficient and visually compelling solutions. I apply my knowledge across software development, databases, networking and infrastructure, and I thrive on new challenges.
      </p>
      
      {/* Contact Options Info */}
      <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mb-8">
        <h3 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
          <MessageSquare size={16} /> Contact Options
        </h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• <strong>Send with Email:</strong> Opens your email client</li>
          <li>• <strong>Download vCard:</strong> Save my contact</li>
          <li>• <strong>Copy Info:</strong> Copy my data to clipboard</li>
        </ul>
      </div>
      
            <div className="space-y-4 mb-8">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className={`w-11 h-11 flex items-center justify-center rounded-full ${method.bg} ${method.iconColor} text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
              <method.icon className="w-6 h-6" />
            </span>
            <div className="flex flex-col">
              <span className="text-white font-medium leading-tight">{method.label}</span>
              <span className="text-gray-300 text-sm leading-tight">{method.value}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex gap-6 mt-4">
        {codingPlatforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 flex items-center justify-center rounded-full bg-transparent text-3xl transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_16px_4px_rgba(36,160,255,0.25)] hover:scale-110`}
            aria-label={platform.label}
          >
            <platform.icon />
          </a>
        ))}
            </div>
    </CardContent>
  </Card>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReasonSelect = (reason: string) => {
    setFormData(prev => ({ ...prev, reason }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Required field validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.reason) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailSubject = `Portfolio Contact - ${formData.reason}`;
      const emailBody = `Hello Angel,\n\n` +
        `I'm writing from your portfolio website:\n\n` +
        `👤 Name: ${formData.firstName} ${formData.lastName}\n` +
        `📧 Email: ${formData.email}\n` +
        `🎯 Reason: ${formData.reason}\n\n` +
        `💬 Message:\n${formData.message}\n\n` +
        `---\n` +
        `This message was sent from your contact form.`;

      // Crear el enlace mailto
      const mailtoLink = `mailto:angelfmoncada.m@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: '✅ Your email client has been opened with the pre-filled message. Just send it.'
      });
      
      // Limpiar el formulario
      setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' });
      
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error opening email client. Please copy the information and send an email manually to angelfmoncada.m@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadContactInfo = () => {
    // Create vCard file
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Ángel Moncada
N:Moncada;Ángel;;;
ORG:Full-Stack Developer
TITLE:Systems Engineering Student
EMAIL;TYPE=INTERNET:angelfmoncada.m@gmail.com
URL:https://github.com/Angelfmoncada
URL:https://www.linkedin.com/in/angel-moncada
NOTE:Full-stack developer and Systems Engineering student with a passion for clean, efficient and visually appealing solutions. I apply my knowledge across software development, databases, networking and infrastructure, and I thrive on new challenges.
END:VCARD`;
    
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Angel_Moncada_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const copyContactInfo = async () => {
    const contactText = `Ángel Moncada - Full-Stack Developer\n` +
      `📧 Email: angelfmoncada.m@gmail.com\n` +
      `🔗 GitHub: https://github.com/Angelfmoncada\n` +
      `💼 LinkedIn: https://www.linkedin.com/in/ángel-moncada-a689882aa\n\n` +
      `Full-stack developer and Systems Engineering student with a passion for clean, efficient and visually appealing solutions.`;
    
    try {
      await navigator.clipboard.writeText(contactText);
      setSubmitStatus({
        type: 'success',
        message: '📋 Contact information copied to clipboard.'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error copying to clipboard. Please select and copy manually.'
      });
    }
  };

  return (
    <Card className="bg-gray-900/70 border-gray-800 rounded-xl overflow-hidden h-full flex flex-col justify-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Let's Talk</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="firstName" className="block text-base font-semibold text-white">First Name</label>
              <Input 
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="lastName" className="block text-base font-semibold text-white">Last Name</label>
              <Input 
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-semibold text-white">Email</label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-base font-semibold text-white mb-1">Reason for Contact</label>
            <div className="flex gap-3">
              {['Freelance', 'Collaboration', 'General Inquiry'].map(option => (
                <button
                  type="button"
                  key={option}
                  onClick={() => handleReasonSelect(option)}
                  className={`px-4 py-2 input-shadow-effect border-2 border-blue-700 text-white font-semibold focus:outline-none transition-colors duration-200 rounded-2xl ${formData.reason === option ? 'bg-blue-600' : 'bg-gray-800'} ${formData.reason === option ? 'ring-2 ring-blue-400' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-base font-semibold text-white">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors resize-none input-shadow-effect rounded-2xl"
              placeholder="Your message"
              required
            />
          </div>
          {submitStatus.type && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <div className="space-y-3">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening email...' : 'Send with Email'} <Send size={20} />
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                type="button"
                onClick={downloadContactInfo}
                variant="outline"
                className="bg-transparent border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={16} /> Download vCard
              </Button>
              
              <Button 
                type="button"
                onClick={copyContactInfo}
                variant="outline"
                className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={16} /> Copy Info
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's connect</h2>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Professional Summary, Contact Methods, Coding Platforms */}
        <ProfessionalSummary />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
