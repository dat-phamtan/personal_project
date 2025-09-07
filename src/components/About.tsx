import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculateAge } from "../lib/utils";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Về Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá hành trình và đam mê của tôi trong lĩnh vực công nghệ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Thông Tin Cá Nhân
                </h3>
                <div className="space-y-3 text-foreground">
                  <p>
                    <strong>Tên:</strong> Phạm Tấn Đạt
                  </p>
                  <p>
                    <strong>Tuổi:</strong> {calculateAge("2005-04-30")}
                  </p>
                  <p>
                    <strong>Vị trí:</strong> Sinh viên
                  </p>
                  <p>
                    <strong>Địa điểm:</strong> Hồ Chí Minh, Việt Nam
                  </p>
                  <p>
                    <strong>Email:</strong> dat.phamtan@hcmut.edu.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Học Vấn
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">
                      Sinh viên Khoa học máy tính
                    </h4>
                    <p className="text-muted-foreground">
                      Trường Đại học Bách khoa • 2023-2027
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Giới Thiệu
                </h3>
                <p className="text-foreground mb-4">
                  Tôi bắt đầu hành trình là một sinh viên ngành Khoa học máy
                  tính, tôi có đam mê với việc xây dựng những ứng dụng, trang
                  web đặc biệt là game với những cơ chế thú vị và đồ họa bắt
                  mắt.
                </p>
                <p className="text-foreground">
                  Tôi luôn tìm cách học hỏi, nâng cao tầm hiểu biết của mình đối
                  với ngành, áp dụng những kiến thức học được vào việc xây dựng
                  những sản phẩm tốt nhất.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Sở Thích
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lập trình</Badge>
                  <Badge variant="secondary">Nghe nhạc</Badge>
                  <Badge variant="secondary">Đọc tiểu thuyết</Badge>
                  <Badge variant="secondary">Xem phim</Badge>
                  <Badge variant="secondary">Game</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
