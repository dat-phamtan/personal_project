import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "React/Next.js", level: 75 },
    { name: "TypeScript", level: 50 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 50 },
    { name: "C++", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "Git/GitHub", level: 70 },
  ];

  const softSkills = [
    "Giao tiếp hiệu quả",
    "Làm việc nhóm",
    "Giải quyết vấn đề",
    "Quản lý thời gian",
    "Tư duy sáng tạo",
    "Thích ứng nhanh",
  ];

  const tools = ["VS Code", "Docker", "Firebase"];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Kỹ Năng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những công nghệ và kỹ năng tôi sử dụng để tạo ra những sản phẩm
            tuyệt vời
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="shadow-elegant border-0 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Kỹ Năng Kỹ Thuật
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-elegant border-0 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Kỹ Năng Mềm
              </h3>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="shadow-elegant border-0 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Công Cụ & Công Nghệ
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
