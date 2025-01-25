import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper";

const Skill = () => {
    return (
        <div className='min-h-screen'> 
            <div className=' head text-center text-white pt-[2%] mb-[5%]' id="skill">
                <h1 className='text-6xl font-semibold mb-8'>SKILLS</h1>
                <span className='block bg-cyan-500 mt-4 mb-4 w-8 h-1 mx-auto '></span>
            </div>
            <div className=' component grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-[10%] gap-[5%]'>
                <div className=' Web-development border-2 bg-gray-900 p-6 border-gray-400 rounded-2xl mb-[23%] '>
                    <p className='text-4xl text-center text-white font-semibold mb-6'>
                        WEB DEVELOPMENT
                    </p>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /><p className='text-white text-center text-sm font-medium'>React</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /><p className='text-white text-center text-sm font-medium'>Node JS</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /><p className='text-white text-center text-sm font-medium'>MongoDB</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /><p className='text-white text-center text-sm font-medium'>Tailwind CSS</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" /><p className='text-white text-center text-sm font-medium'>Bootstrap</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> <p className='text-white text-center text-sm font-medium'>Javascript</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" /> <p className='text-white text-center text-sm font-medium'>PostgreSql</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" /><p className='text-white text-center text-sm font-medium'>Mysql</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /><p className='text-white text-center text-sm font-medium'>HTML</p></div>
                        <div className='flex flex-col items-center border-2  p-3 rounded-xl border-gray-700 hover:border-blue-500 transition '><img className='h-12 w-12 mb-2' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /><p className='text-white text-center text-sm font-medium'>CSS</p></div>
                    </div>
                </div>
                <div className="Devops border-2 border-gray-400 rounded-2xl bg-gray-900 p-6 mb-[23%]">
                    <p className="text-center text-4xl font-semibold text-white mb-6 ">
                        DEVOPS
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Jenkins", icon: "jenkins/jenkins-original.svg" },
                            { name: "Terraform", icon: "terraform/terraform-original-wordmark.svg" },
                            { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                            { name: "Ansible", icon: "ansible/ansible-original-wordmark.svg" },
                            { name: "Git", icon: "git/git-original.svg" },
                            { name: "Azure", icon: "azure/azure-original.svg" },
                            { name: "Kubernetes", icon: "kubernetes/kubernetes-original-wordmark.svg" },
                            { name: "Grafana", icon: "grafana/grafana-original.svg" },
                            { name: "Maven", icon: "maven/maven-original-wordmark.svg" },
                            { name: "Prometheus", icon: "prometheus/prometheus-original.svg" },
                            { name: "SonarQube", icon: "sonarqube/sonarqube-plain-wordmark.svg" },
                            { name: "Argo CD", icon: "argocd/argocd-original.svg" },
                        ].map((tool, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-3 rounded-xl border-2 border-gray-700 hover:border-blue-500 transition"
                            >
                                <img
                                    className="h-12 w-12 object-contain mb-2"
                                    alt={tool.name}
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool.icon}`}
                                />
                                <p className="text-white text-center text-sm font-medium">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='Other bg-gray-900 p-6 rounded-2xl mx-[10%] border-2 border-gray-400 mb-[10%] mt-[25%] lg:mt-[5%]'>
                <p className='text-4xl text-white text-center mb-[2%]'>OTHERS</p>
                <div className='grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 mt-[8%] lg:mt-[0]'>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /><p>Python</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /><p>Java</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" /><p>Go</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /><p>VS Code</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" /><p>Nginx</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" /><p>Putty</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" /><p>Netlify</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" /><p>Linux</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg" /><p>Helm</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" /><p>Intellij Idea</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" /><p>Photoshop</p></div>
                    <div className='testing items-center mx-4 rounded-2xl border-gray-800 gap-[5%] p-6 hover:border-blue-500 duration-200 hover:bg-gray-600 text-white border-2 mb-[20%] flex flex-col'><img className='mb-[5%] h-12 w-12' alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /><p>Postman</p></div>
                </div>
            </div>
        </div>
    )
}

export default Skill