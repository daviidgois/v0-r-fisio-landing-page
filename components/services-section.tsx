import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Fisioterapia",
      description:
        "A fisioterapia é uma área da saúde que visa a reabilitação e a prevenção de lesões por meio de terapias físicas e exercícios específicos.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-K3wH1sExBuFSMfR00csdZe3qDNAZ4c.jpg",
    },
    {
      title: "Osteopatia",
      description:
        "A osteopatia é uma terapia física que utiliza técnicas manuais para aliviar a dor e melhorar a mobilidade do corpo.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xvqMcbeJowTwFRbw1jUaT5OdL8.jpg-L5fHagnZxiOGcVUOt0bY0sHRrubXq0.avif",
    },
    {
      title: "Exercício Clínico",
      description:
        "O exercício clínico consiste em atividades físicas prescritas por profissionais de saúde com o objetivo de reabilitação e melhoria da condição física.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-i7NOFam5c3Y9yk5cEs5UL2t89VeMZ7.jpg",
    },
    {
      title: "Prevenção de lesões",
      description:
        "A prevenção de lesões envolve a adoção de medidas para evitar danos físicos, como o uso de técnicas de treinamento adequadas e a correção de posturas incorretas.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-BhfOBSp7h3OI5UgaPqybwwZ3diV5wm.jpg",
    },
    {
      title: "Reabilitação",
      description:
        "A reabilitação é o processo terapêutico que visa recuperar a função física e mental após lesão, doença ou cirurgia, por meio de exercícios, tratamentos e cuidados especializados.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-DI8LTWgl6JixKh72JBzNVAogirwqct.jpg",
    },
    {
      title: "Performance",
      description:
        "Performance é o desempenho eficiente em atividades específicas, destacando-se pela habilidade e rendimento.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-titSv0KLUwQrAGwrU152t0TF2QmtZk.jpg",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-3xl text-brand-green">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-card rounded-2xl p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img src="/carolina-clara-logo.png" alt="Carolina Clara Psicóloga" className="w-80 h-auto" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-brand-green mb-4">Psicologia</h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                A R.Fisio orgulha-se de promover a saúde mental, oferecendo serviços de psicologia presenciais e online
                para indivíduos de todas as idades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
