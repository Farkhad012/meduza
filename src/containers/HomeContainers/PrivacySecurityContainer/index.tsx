import React from 'react';

import { lockout2, logs, encryption } from 'assets/images/icons'

import './styles.scss';

export const PrivacySecurityContainer: React.FC = () => {
  return (
    <section id="privacy">
      <div className="privacy__container">
        <div className="privacy__header blur gradient-bg gradient-bg-top">
          <h2>Ваша приватность <span>- приоритет</span></h2>
          <div className="privacy__header-icon">
            <img src={lockout2} alt="lockout-icon" />
          </div>
          <div className="privacy__header-card">
            <p>
              <span>Вы полностью контролируете свои данные. </span>
              Приложение не собирает и не передаёт никакой статистики, логов и другой информации о пользователях и их данных.
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <div className="privacy__content-card">
            <div className="privacy__content-icon">
              <img src={logs} alt="logs-icon" />
            </div>
            <div className="privacy__content-text">
              <h3>Не сохраняет логи</h3>
              <p>
                Для каждого VPN-протокола запускается отдельный контейнер. Их можно удалить в один клик. Они не пишут логи внутри себя,
                и не делают ничего, кроме своей прямой задачи.
              </p>
            </div>
          </div>
          <div className="privacy__content-card">
            <div className="privacy__content-icon">
              <img src={encryption} alt="encryption-icon" />
            </div>
            <div className="privacy__content-text">
              <h3>Использует умное шифрование</h3>
              <p>
                При подключении клиент генерирует новый ключ
                и новый сертификат безопасности и пересылает его на сервер
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}