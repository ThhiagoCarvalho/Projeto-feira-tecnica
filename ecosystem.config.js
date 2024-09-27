module.exports = {
  apps: [
    {
      name: "app1",
      script: "./app.js",
      watch: true,
      instances: 10, // Rotaciona at� 10 inst�ncias
      exec_mode: "cluster", // Modo cluster para m�ltiplas inst�ncias
      max_restarts: 10, // M�ximo de rein�cios em caso de falha
      restart_delay: 5000, // Atraso de 5 segundos entre rein�cios
    },
    
    // Adicione mais aplicativos conforme necess�rio
  ],
};
