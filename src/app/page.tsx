import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGzU7-LKpPIrQ/profile-displayphoto-shrink_400_400/0/1709427485020?e=1717027200&v=beta&t=_7LzTTDh7EZDcL2NL5Tr8zRS_3zdnLfvl-QrcvPsk_4"
            alt="Anderson Engel Wirth"
            className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">Anderson Engel Wirth</h1>
          <p className="text-xl text-gray-600">Diretor de TI no Grupo Crestani</p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Sobre Mim</h2>
          <p>
            Profissional formado em Gestão da Tecnologia da Informação pela UCEFF,
            atualmente atuando como Diretor de TI no Grupo Crestani. Possuo experiência
            em liderança de equipes, implementação de sistemas e soluções inovadoras
            voltadas para eficiência operacional e segurança da informação.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Experiência Profissional</h2>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Grupo Crestani</h3>
              <p className="text-gray-600">Diretor de TI</p>
              <p className="mt-2">
                Liderança estratégica na área de tecnologia, com foco na transformação
                digital da empresa, otimização de processos e gestão de infraestrutura
                de TI.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Gestão de Tecnologia da Informação</li>
            <li>Infraestrutura e Redes</li>
            <li>Segurança da Informação</li>
            <li>Liderança de Equipes</li>
            <li>Implantação de Sistemas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:anderson.wirth@exemplo.com">
                <Mail className="mr-2 h-4 w-4" /> E-mail
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/anderson-engel-wirth/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}