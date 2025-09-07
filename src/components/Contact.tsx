import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cảm ơn bạn!",
      description:
        "Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất có thể.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-6" />,
      title: "Email",
      value: "dat.phamtan@hcmut.edu.com",
      link: "mailto:dat.phamtan@hcmut.edu.com",
    },
    {
      icon: <Phone className="w-5 h-6" />,
      title: "Điện thoại",
      value: "+84 363539478",
      link: "tel:+84363539478",
    },
    {
      icon: <MapPin className="w-5 h-6" />,
      title: "Địa chỉ",
      value: "Hồ Chí Minh, Việt Nam",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/dat-phamtan",
      color: "hover:text-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-ph%E1%BA%A1m-t%E1%BA%A5n-baaa06366/",
      color: "hover:text-blue-600",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/pham.at.991670/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Liên Hệ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hãy kết nối với tôi để thảo luận về cơ hội hợp tác hoặc chỉ đơn giản
            là trò chuyện về công nghệ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Thông Tin Liên Hệ
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-hero hover:shadow-elegant transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:text-accent transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Mạng Xã Hội
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gradient-hero hover:shadow-glow transition-all duration-300 text-muted-foreground ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Gửi Tin Nhắn
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Họ và Tên
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tin Nhắn
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Gửi Tin Nhắn
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
