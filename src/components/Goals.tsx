import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Star } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Mục Tiêu Ngắn Hạn",
      items: [
        "Nâng cao kỹ năng React và TypeScript",
        "Học thêm về UI/UX Design",
        "Hoàn thành 3 dự án cá nhân",
        "Tham gia các khóa học online chuyên sâu"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Mục Tiêu Dài Hạn",
      items: [
        "Trở thành Senior Frontend Developer",
        "Dẫn dắt một team development",
        "Khởi nghiệp với startup công nghệ",
        "Đóng góp cho cộng đồng open-source"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Định Hướng Phát Triển",
      items: [
        "Chuyên sâu về Frontend Architecture",
        "Tìm hiểu về Machine Learning",
        "Phát triển kỹ năng Product Management",
        "Xây dựng personal brand trong ngành"
      ]
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Giá Trị Cốt Lõi",
      items: [
        "Học hỏi không ngừng",
        "Chia sẻ kiến thức",
        "Tạo ra giá trị thực",
        "Hợp tác và phát triển cùng nhau"
      ]
    }
  ];

  return (
    <section id="goals" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mục Tiêu & Định Hướng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tầm nhìn và kế hoạch phát triển sự nghiệp của tôi trong tương lai
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="shadow-elegant border-0 bg-gradient-hero hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {goal.icon}
                  <h3 className="text-2xl font-semibold ml-4 text-foreground">
                    {goal.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {goal.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Tuyên Ngôn Cá Nhân</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                "Tôi tin rằng công nghệ có thể thay đổi thế giới và tôi muốn là một phần của sự thay đổi đó. 
                Mục tiêu của tôi không chỉ là tạo ra những sản phẩm tuyệt vời mà còn truyền cảm hứng và 
                giúp đỡ những người khác trên con đường phát triển sự nghiệp."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Goals;